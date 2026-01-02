import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabaseClient";

const BUCKET = "slipper-images";

type Category = {
  id: string;
  name_tr: string | null;
  name_en: string | null;
  name_ar: string | null;
  slug: string;
};

type Tag = {
  id: string;
  name_tr: string | null;
  name_en: string | null;
  name_ar: string | null;
  slug: string;
};

type SlipperRow = {
  id: string;
  name_tr: string;
  name_en: string | null;
  name_ar: string | null;
  desc_tr: string | null;
  desc_en: string | null;
  desc_ar: string | null;
  image_path: string | null;
  image_url: string | null;
  sizes: string | null;
  upper_tr: string | null;
  upper_en: string | null;
  upper_ar: string | null;
  sole_tr: string | null;
  sole_en: string | null;
  sole_ar: string | null;
  created_at: string;
  slipper_categories: { categories: Category }[];
  slipper_tags: { tags: Tag }[];
};

type AdminUser = {
  id: string;
  email: string;
  is_super_admin: boolean;
  created_at: string;
};

const slugify = (value: string) => {
  const map: Record<string, string> = {
    ç: "c",
    ğ: "g",
    ı: "i",
    ö: "o",
    ş: "s",
    ü: "u",
    Ç: "c",
    Ğ: "g",
    İ: "i",
    Ö: "o",
    Ş: "s",
    Ü: "u",
  };
  const normalized = value
    .trim()
    .split("")
    .map((char) => map[char] ?? char)
    .join("")
    .toLowerCase();
  return normalized
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
};

const getImageUrl = (path: string | null, url: string | null) => {
  if (url) {
    return url;
  }
  if (!path) {
    return "";
  }
  const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
  return data.publicUrl;
};

const Admin = () => {
  const { toast } = useToast();
  const [sessionEmail, setSessionEmail] = useState<string | null>(null);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isSuperAdmin, setIsSuperAdmin] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [categoryForm, setCategoryForm] = useState({ name_tr: "", name_en: "", name_ar: "" });
  const [tagForm, setTagForm] = useState({ name_tr: "", name_en: "", name_ar: "" });

  const [slipperForm, setSlipperForm] = useState({
    name_tr: "",
    name_en: "",
    name_ar: "",
    desc_tr: "",
    desc_en: "",
    desc_ar: "",
    sizes: "",
    upper_tr: "",
    upper_en: "",
    upper_ar: "",
    sole_tr: "",
    sole_en: "",
    sole_ar: "",
  });
  const [selectedCategoryIds, setSelectedCategoryIds] = useState<string[]>([]);
  const [selectedTagIds, setSelectedTagIds] = useState<string[]>([]);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [currentImage, setCurrentImage] = useState<string>("");
  const [savingSlipper, setSavingSlipper] = useState(false);

  const [newAdminEmail, setNewAdminEmail] = useState("");
  const [newAdminIsSuper, setNewAdminIsSuper] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const loadSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (!isMounted) return;
      setSessionEmail(data.session?.user.email ?? null);
      setCheckingAuth(false);
    };
    loadSession();
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSessionEmail(session?.user.email ?? null);
    });
    return () => {
      isMounted = false;
      listener.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    const checkAdmin = async () => {
      if (!sessionEmail) {
        setIsAdmin(false);
        setIsSuperAdmin(false);
        return;
      }
      const { data: adminFlag } = await supabase.rpc("is_admin");
      const { data: superFlag } = await supabase.rpc("is_super_admin");
      setIsAdmin(Boolean(adminFlag));
      setIsSuperAdmin(Boolean(superFlag));
    };
    checkAdmin();
  }, [sessionEmail]);

  const fetchCategories = async (): Promise<Category[]> => {
    const { data, error } = await supabase
      .from("categories")
      .select("id,name_tr,name_en,name_ar,slug")
      .order("created_at", { ascending: false });
    if (error) throw error;
    return data ?? [];
  };

  const fetchTags = async (): Promise<Tag[]> => {
    const { data, error } = await supabase
      .from("tags")
      .select("id,name_tr,name_en,name_ar,slug")
      .order("created_at", { ascending: false });
    if (error) throw error;
    return data ?? [];
  };

  const fetchSlippers = async (): Promise<SlipperRow[]> => {
    const { data, error } = await supabase
      .from("slippers")
      .select(
        "id,name_tr,name_en,name_ar,desc_tr,desc_en,desc_ar,image_path,image_url,sizes,upper_tr,upper_en,upper_ar,sole_tr,sole_en,sole_ar,created_at,slipper_categories(categories(id,name_tr,name_en,name_ar,slug)),slipper_tags(tags(id,name_tr,name_en,name_ar,slug))"
      )
      .order("created_at", { ascending: false });
    if (error) throw error;
    return data ?? [];
  };

  const fetchAdmins = async (): Promise<AdminUser[]> => {
    const { data, error } = await supabase
      .from("admin_users")
      .select("id,email,is_super_admin,created_at")
      .order("created_at", { ascending: true });
    if (error) throw error;
    return data ?? [];
  };

  const {
    data: categories = [],
    refetch: refetchCategories,
    isLoading: categoriesLoading,
  } = useQuery({
    queryKey: ["admin-categories"],
    queryFn: fetchCategories,
    enabled: isAdmin,
  });

  const {
    data: tags = [],
    refetch: refetchTags,
    isLoading: tagsLoading,
  } = useQuery({
    queryKey: ["admin-tags"],
    queryFn: fetchTags,
    enabled: isAdmin,
  });

  const {
    data: slippers = [],
    refetch: refetchSlippers,
    isLoading: slippersLoading,
  } = useQuery({
    queryKey: ["admin-slippers"],
    queryFn: fetchSlippers,
    enabled: isAdmin,
  });

  const {
    data: admins = [],
    refetch: refetchAdmins,
    isLoading: adminsLoading,
  } = useQuery({
    queryKey: ["admin-users"],
    queryFn: fetchAdmins,
    enabled: isSuperAdmin,
  });

  const handleSignIn = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email: loginEmail,
      password: loginPassword,
    });
    if (error) {
      toast({ title: "Login failed", description: error.message, variant: "destructive" });
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setIsAdmin(false);
    setIsSuperAdmin(false);
  };

  const handleCreateCategory = async () => {
    if (!categoryForm.name_tr.trim()) {
      toast({ title: "Kategori adı gerekli", variant: "destructive" });
      return;
    }
    const slug = slugify(categoryForm.name_tr);
    const { error } = await supabase.from("categories").insert({
      name_tr: categoryForm.name_tr.trim(),
      name_en: categoryForm.name_en.trim() || null,
      name_ar: categoryForm.name_ar.trim() || null,
      slug,
    });
    if (error) {
      toast({ title: "Kategori eklenemedi", description: error.message, variant: "destructive" });
      return;
    }
    setCategoryForm({ name_tr: "", name_en: "", name_ar: "" });
    refetchCategories();
  };

  const handleCreateTag = async () => {
    if (!tagForm.name_tr.trim()) {
      toast({ title: "Etiket adı gerekli", variant: "destructive" });
      return;
    }
    const slug = slugify(tagForm.name_tr);
    const { error } = await supabase.from("tags").insert({
      name_tr: tagForm.name_tr.trim(),
      name_en: tagForm.name_en.trim() || null,
      name_ar: tagForm.name_ar.trim() || null,
      slug,
    });
    if (error) {
      toast({ title: "Etiket eklenemedi", description: error.message, variant: "destructive" });
      return;
    }
    setTagForm({ name_tr: "", name_en: "", name_ar: "" });
    refetchTags();
  };

  const resetSlipperForm = () => {
    setEditingId(null);
    setSlipperForm({
      name_tr: "",
      name_en: "",
      name_ar: "",
      desc_tr: "",
      desc_en: "",
      desc_ar: "",
      sizes: "",
      upper_tr: "",
      upper_en: "",
      upper_ar: "",
      sole_tr: "",
      sole_en: "",
      sole_ar: "",
    });
    setSelectedCategoryIds([]);
    setSelectedTagIds([]);
    setImageFile(null);
    setCurrentImage("");
  };

  const handleEditSlipper = (slipper: SlipperRow) => {
    setEditingId(slipper.id);
    setSlipperForm({
      name_tr: slipper.name_tr || "",
      name_en: slipper.name_en || "",
      name_ar: slipper.name_ar || "",
      desc_tr: slipper.desc_tr || "",
      desc_en: slipper.desc_en || "",
      desc_ar: slipper.desc_ar || "",
      sizes: slipper.sizes || "",
      upper_tr: slipper.upper_tr || "",
      upper_en: slipper.upper_en || "",
      upper_ar: slipper.upper_ar || "",
      sole_tr: slipper.sole_tr || "",
      sole_en: slipper.sole_en || "",
      sole_ar: slipper.sole_ar || "",
    });
    setSelectedCategoryIds(slipper.slipper_categories.map((item) => item.categories.id));
    setSelectedTagIds(slipper.slipper_tags.map((item) => item.tags.id));
    setCurrentImage(getImageUrl(slipper.image_path, slipper.image_url));
  };

  const handleSaveSlipper = async () => {
    if (!slipperForm.name_tr.trim()) {
      toast({ title: "Ürün adı gerekli", variant: "destructive" });
      return;
    }
    setSavingSlipper(true);
    let imagePath = null as string | null;
    let imageUrl = null as string | null;

    if (imageFile) {
      const extension = imageFile.name.split(".").pop();
      const safeName = imageFile.name.replace(/[^a-zA-Z0-9_.-]/g, "-");
      const filePath = `${Date.now()}-${safeName}`;
      const { data, error } = await supabase.storage
        .from(BUCKET)
        .upload(filePath, imageFile, { upsert: true });
      if (error) {
        toast({ title: "Görsel yüklenemedi", description: error.message, variant: "destructive" });
        setSavingSlipper(false);
        return;
      }
      imagePath = data.path;
      imageUrl = getImageUrl(imagePath, null);
    }

    const payload = {
      name_tr: slipperForm.name_tr.trim(),
      name_en: slipperForm.name_en.trim() || null,
      name_ar: slipperForm.name_ar.trim() || null,
      desc_tr: slipperForm.desc_tr.trim() || null,
      desc_en: slipperForm.desc_en.trim() || null,
      desc_ar: slipperForm.desc_ar.trim() || null,
      sizes: slipperForm.sizes.trim() || null,
      upper_tr: slipperForm.upper_tr.trim() || null,
      upper_en: slipperForm.upper_en.trim() || null,
      upper_ar: slipperForm.upper_ar.trim() || null,
      sole_tr: slipperForm.sole_tr.trim() || null,
      sole_en: slipperForm.sole_en.trim() || null,
      sole_ar: slipperForm.sole_ar.trim() || null,
      image_path: imagePath,
      image_url: imageUrl,
      updated_at: new Date().toISOString(),
    };

    let slipperId = editingId;
    if (editingId) {
      const { error } = await supabase.from("slippers").update(payload).eq("id", editingId);
      if (error) {
        toast({ title: "Ürün güncellenemedi", description: error.message, variant: "destructive" });
        setSavingSlipper(false);
        return;
      }
    } else {
      const { data, error } = await supabase.from("slippers").insert(payload).select("id").single();
      if (error || !data?.id) {
        toast({ title: "Ürün eklenemedi", description: error?.message, variant: "destructive" });
        setSavingSlipper(false);
        return;
      }
      slipperId = data.id;
    }

    if (slipperId) {
      await supabase.from("slipper_categories").delete().eq("slipper_id", slipperId);
      if (selectedCategoryIds.length > 0) {
        await supabase
          .from("slipper_categories")
          .insert(selectedCategoryIds.map((id) => ({ slipper_id: slipperId, category_id: id })));
      }

      await supabase.from("slipper_tags").delete().eq("slipper_id", slipperId);
      if (selectedTagIds.length > 0) {
        await supabase
          .from("slipper_tags")
          .insert(selectedTagIds.map((id) => ({ slipper_id: slipperId, tag_id: id })));
      }
    }

    toast({ title: editingId ? "Ürün güncellendi" : "Ürün eklendi" });
    resetSlipperForm();
    refetchSlippers();
    setSavingSlipper(false);
  };

  const handleDeleteSlipper = async (slipper: SlipperRow) => {
    if (slipper.image_path) {
      await supabase.storage.from(BUCKET).remove([slipper.image_path]);
    }
    const { error } = await supabase.from("slippers").delete().eq("id", slipper.id);
    if (error) {
      toast({ title: "Ürün silinemedi", description: error.message, variant: "destructive" });
      return;
    }
    refetchSlippers();
  };

  const handleCreateAdmin = async () => {
    if (!newAdminEmail.trim()) {
      toast({ title: "E-posta gerekli", variant: "destructive" });
      return;
    }
    const { error } = await supabase.from("admin_users").insert({
      email: newAdminEmail.trim(),
      is_super_admin: newAdminIsSuper,
    });
    if (error) {
      toast({ title: "Admin eklenemedi", description: error.message, variant: "destructive" });
      return;
    }
    setNewAdminEmail("");
    setNewAdminIsSuper(false);
    refetchAdmins();
  };

  const handleDeleteAdmin = async (adminId: string) => {
    const { error } = await supabase.from("admin_users").delete().eq("id", adminId);
    if (error) {
      toast({ title: "Admin silinemedi", description: error.message, variant: "destructive" });
      return;
    }
    refetchAdmins();
  };

  const hasData = useMemo(() => slippers.length > 0, [slippers]);

  if (checkingAuth) {
    return (
      <section className="section-padding bg-background">
        <div className="container-wide">
          <p className="text-muted-foreground">Yükleniyor...</p>
        </div>
      </section>
    );
  }

  if (!sessionEmail) {
    return (
      <section className="section-padding bg-background">
        <div className="container-wide max-w-xl space-y-6">
          <h1 className="text-3xl font-display font-semibold">Admin Girişi</h1>
          <div className="space-y-2">
            <Label htmlFor="admin-email">E-posta</Label>
            <Input
              id="admin-email"
              type="email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="admin-password">Şifre</Label>
            <Input
              id="admin-password"
              type="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
          </div>
          <Button onClick={handleSignIn}>Giriş Yap</Button>
          <p className="text-xs text-muted-foreground">
            Not: Admin kullanıcıları Supabase Auth üzerinden oluşturulmalıdır.
          </p>
        </div>
      </section>
    );
  }

  if (!isAdmin) {
    return (
      <section className="section-padding bg-background">
        <div className="container-wide max-w-xl space-y-4">
          <h1 className="text-3xl font-display font-semibold">Yetki Gerekli</h1>
          <p className="text-muted-foreground">
            Bu hesap admin listesinde değil. Lütfen yöneticiyle iletişime geçin.
          </p>
          <Button variant="secondary" onClick={handleSignOut}>
            Çıkış Yap
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-background">
      <div className="container-wide space-y-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-display font-semibold">Admin Panel</h1>
            <p className="text-sm text-muted-foreground">{sessionEmail}</p>
          </div>
          <Button variant="secondary" onClick={handleSignOut}>
            Çıkış Yap
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-border/50 bg-card p-6 space-y-4">
            <h2 className="font-display text-xl font-semibold">Kategoriler</h2>
            <div className="grid gap-3">
              <Input
                placeholder="Türkçe ad"
                value={categoryForm.name_tr}
                onChange={(e) => setCategoryForm((prev) => ({ ...prev, name_tr: e.target.value }))}
              />
              <Input
                placeholder="English name"
                value={categoryForm.name_en}
                onChange={(e) => setCategoryForm((prev) => ({ ...prev, name_en: e.target.value }))}
              />
              <Input
                placeholder="Arabic name"
                value={categoryForm.name_ar}
                onChange={(e) => setCategoryForm((prev) => ({ ...prev, name_ar: e.target.value }))}
              />
              <Button onClick={handleCreateCategory}>Kategori Ekle</Button>
            </div>
            {categoriesLoading ? (
              <p className="text-sm text-muted-foreground">Yükleniyor...</p>
            ) : (
              <div className="space-y-2 text-sm text-muted-foreground">
                {categories.map((category) => (
                  <div key={category.id} className="flex items-center justify-between">
                    <span>{category.name_tr}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => supabase.from("categories").delete().eq("id", category.id).then(refetchCategories)}
                    >
                      Sil
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="rounded-2xl border border-border/50 bg-card p-6 space-y-4">
            <h2 className="font-display text-xl font-semibold">Etiketler</h2>
            <div className="grid gap-3">
              <Input
                placeholder="Türkçe ad"
                value={tagForm.name_tr}
                onChange={(e) => setTagForm((prev) => ({ ...prev, name_tr: e.target.value }))}
              />
              <Input
                placeholder="English name"
                value={tagForm.name_en}
                onChange={(e) => setTagForm((prev) => ({ ...prev, name_en: e.target.value }))}
              />
              <Input
                placeholder="Arabic name"
                value={tagForm.name_ar}
                onChange={(e) => setTagForm((prev) => ({ ...prev, name_ar: e.target.value }))}
              />
              <Button onClick={handleCreateTag}>Etiket Ekle</Button>
            </div>
            {tagsLoading ? (
              <p className="text-sm text-muted-foreground">Yükleniyor...</p>
            ) : (
              <div className="space-y-2 text-sm text-muted-foreground">
                {tags.map((tag) => (
                  <div key={tag.id} className="flex items-center justify-between">
                    <span>{tag.name_tr}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => supabase.from("tags").delete().eq("id", tag.id).then(refetchTags)}
                    >
                      Sil
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="rounded-2xl border border-border/50 bg-card p-6 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="font-display text-xl font-semibold">Terlik Modelleri</h2>
            {editingId && (
              <Button variant="secondary" onClick={resetSlipperForm}>
                Yeni Model
              </Button>
            )}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Input
              placeholder="Model adı (TR)"
              value={slipperForm.name_tr}
              onChange={(e) => setSlipperForm((prev) => ({ ...prev, name_tr: e.target.value }))}
            />
            <Input
              placeholder="Model adı (EN)"
              value={slipperForm.name_en}
              onChange={(e) => setSlipperForm((prev) => ({ ...prev, name_en: e.target.value }))}
            />
            <Input
              placeholder="Model adı (AR)"
              value={slipperForm.name_ar}
              onChange={(e) => setSlipperForm((prev) => ({ ...prev, name_ar: e.target.value }))}
            />
            <Input
              placeholder="Ölçüler (örn. 36-41 EU)"
              value={slipperForm.sizes}
              onChange={(e) => setSlipperForm((prev) => ({ ...prev, sizes: e.target.value }))}
            />
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Textarea
              placeholder="Açıklama (TR)"
              value={slipperForm.desc_tr}
              onChange={(e) => setSlipperForm((prev) => ({ ...prev, desc_tr: e.target.value }))}
            />
            <Textarea
              placeholder="Description (EN)"
              value={slipperForm.desc_en}
              onChange={(e) => setSlipperForm((prev) => ({ ...prev, desc_en: e.target.value }))}
            />
            <Textarea
              placeholder="الوصف (AR)"
              value={slipperForm.desc_ar}
              onChange={(e) => setSlipperForm((prev) => ({ ...prev, desc_ar: e.target.value }))}
            />
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Input
              placeholder="Üst malzeme (TR)"
              value={slipperForm.upper_tr}
              onChange={(e) => setSlipperForm((prev) => ({ ...prev, upper_tr: e.target.value }))}
            />
            <Input
              placeholder="Upper (EN)"
              value={slipperForm.upper_en}
              onChange={(e) => setSlipperForm((prev) => ({ ...prev, upper_en: e.target.value }))}
            />
            <Input
              placeholder="الجزء العلوي (AR)"
              value={slipperForm.upper_ar}
              onChange={(e) => setSlipperForm((prev) => ({ ...prev, upper_ar: e.target.value }))}
            />
            <Input
              placeholder="Taban (TR)"
              value={slipperForm.sole_tr}
              onChange={(e) => setSlipperForm((prev) => ({ ...prev, sole_tr: e.target.value }))}
            />
            <Input
              placeholder="Sole (EN)"
              value={slipperForm.sole_en}
              onChange={(e) => setSlipperForm((prev) => ({ ...prev, sole_en: e.target.value }))}
            />
            <Input
              placeholder="النعل (AR)"
              value={slipperForm.sole_ar}
              onChange={(e) => setSlipperForm((prev) => ({ ...prev, sole_ar: e.target.value }))}
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <p className="text-sm font-medium">Kategoriler</p>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <label key={category.id} className="flex items-center gap-2 text-sm">
                    <Checkbox
                      checked={selectedCategoryIds.includes(category.id)}
                      onCheckedChange={() =>
                        setSelectedCategoryIds((prev) =>
                          prev.includes(category.id)
                            ? prev.filter((id) => id !== category.id)
                            : [...prev, category.id]
                        )
                      }
                    />
                    <span>{category.name_tr}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Etiketler</p>
              <div className="flex flex-wrap gap-3">
                {tags.map((tag) => (
                  <label key={tag.id} className="flex items-center gap-2 text-sm">
                    <Checkbox
                      checked={selectedTagIds.includes(tag.id)}
                      onCheckedChange={() =>
                        setSelectedTagIds((prev) =>
                          prev.includes(tag.id) ? prev.filter((id) => id !== tag.id) : [...prev, tag.id]
                        )
                      }
                    />
                    <span>{tag.name_tr}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Görsel</Label>
            <Input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files?.[0] ?? null)} />
            {currentImage && (
              <img src={currentImage} alt="Mevcut görsel" className="h-32 rounded-lg object-cover" />
            )}
          </div>

          <Button onClick={handleSaveSlipper} disabled={savingSlipper}>
            {editingId ? "Güncelle" : "Kaydet"}
          </Button>

          <div className="pt-4 border-t border-border/50">
            <h3 className="font-display text-lg font-semibold mb-4">Mevcut Modeller</h3>
            {slippersLoading ? (
              <p className="text-sm text-muted-foreground">Yükleniyor...</p>
            ) : (
              <div className="grid gap-4 md:grid-cols-2">
                {slippers.map((slipper) => (
                  <div key={slipper.id} className="rounded-xl border border-border/50 p-4 space-y-2">
                    <p className="font-medium">{slipper.name_tr}</p>
                    {getImageUrl(slipper.image_path, slipper.image_url) && (
                      <img
                        src={getImageUrl(slipper.image_path, slipper.image_url)}
                        alt={slipper.name_tr}
                        className="h-24 w-full object-cover rounded-lg"
                      />
                    )}
                    <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                      {slipper.slipper_categories.map((item) => (
                        <span key={item.categories.id}>{item.categories.name_tr}</span>
                      ))}
                      {slipper.slipper_tags.map((item) => (
                        <span key={item.tags.id}>{item.tags.name_tr}</span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="secondary" onClick={() => handleEditSlipper(slipper)}>
                        Düzenle
                      </Button>
                      <Button size="sm" variant="destructive" onClick={() => handleDeleteSlipper(slipper)}>
                        Sil
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {!slippersLoading && !hasData && (
              <p className="text-sm text-muted-foreground">Henüz model eklenmedi.</p>
            )}
          </div>
        </div>

        <div className="rounded-2xl border border-border/50 bg-card p-6 space-y-4">
          <h2 className="font-display text-xl font-semibold">Admin Kullanıcılar</h2>
          {!isSuperAdmin && (
            <p className="text-sm text-muted-foreground">
              Admin ekleme/silme sadece super adminler tarafından yapılabilir.
            </p>
          )}
          <div className="grid gap-3 md:grid-cols-[1fr_auto_auto] items-center">
            <Input
              placeholder="Admin e-posta"
              value={newAdminEmail}
              onChange={(e) => setNewAdminEmail(e.target.value)}
              disabled={!isSuperAdmin}
            />
            <label className="flex items-center gap-2 text-sm">
              <Checkbox
                checked={newAdminIsSuper}
                onCheckedChange={(checked) => setNewAdminIsSuper(Boolean(checked))}
                disabled={!isSuperAdmin}
              />
              Super admin
            </label>
            <Button onClick={handleCreateAdmin} disabled={!isSuperAdmin}>
              Ekle
            </Button>
          </div>
          {adminsLoading ? (
            <p className="text-sm text-muted-foreground">Yükleniyor...</p>
          ) : (
            <div className="space-y-2 text-sm text-muted-foreground">
              {admins.map((admin) => (
                <div key={admin.id} className="flex items-center justify-between">
                  <span>
                    {admin.email} {admin.is_super_admin ? "(super)" : ""}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    disabled={!isSuperAdmin || admin.email === sessionEmail}
                    onClick={() => handleDeleteAdmin(admin.id)}
                  >
                    Sil
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Admin;
