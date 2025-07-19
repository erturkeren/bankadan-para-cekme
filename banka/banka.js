let hesapA = {
  ad: "EREN",
  hesapNo: "12345678",
  bakiye: 2000,
};

let hesapB = {
  ad: "CAN",
  hesapNo: "12345679",
  bakiye: 3000,
};

function paraCek(hesap, miktar) {
  console.log(`Merhaba ${hesap.ad}`);

  if (hesap.bakiye >= miktar) {
    hesap.bakiye -= miktar;
    console.log(`Paranızı alabilirsiniz. Yeni bakiyeniz: ${hesap.bakiye} TL`);
  } else {
    console.log("Üzgünüz, bakiyeniz yetersiz.");
  }
}

paraCek(hesapA, 5001);
paraCek(hesapB, 1500);
