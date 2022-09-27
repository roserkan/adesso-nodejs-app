const globalMessages = {
  added: "Ekleme işlemi başarılı",
  deleted: "Silme işlemi başarılı",
  updated: "Güncelleme işlemi başarılı",
  invalidObjectId: "Lütfen geçerli bi ID bilgisi giriniz!",
};

const categoryMessages = {
  notFound: "Kategori bulunamadı!",
  categoryNameAlreadyExist: "Kategori adı zaten var!",
};

const productMessages = {
  notFound: "Ürün bulunamadı!",
  productNameAlreadyExist: "Ürün adı zaten var!",
  categoryNotFound: "Kategori bulunamadı",
};

const roleMessages = {
  notFound: "Rol bulunamadı!",
  roleNameAlreadyExist: "Rol zaten var!",
};

const userMessages = {
  notFound: "Kullanıcı bulunamadı!",
  emailAddressAlreadyExist: "E-posta daha önce kullanılmış!",
  emailAddressNotFound: "E-posta bulunamadı!",
  passwordError: "Şifreniz hatalı!",
  loginSuccess: "Giriş işlemi başarılı"
};

const userDetailMessages = {
  notFound: "Kullanıcı bulunamadı!",
  roleNameAlreadyExist: "Rol zaten var!",
};


module.exports = {
  categoryMessages,
  globalMessages,
  productMessages,
  roleMessages,
  userMessages,
  userDetailMessages
};
