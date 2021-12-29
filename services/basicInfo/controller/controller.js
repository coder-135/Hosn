
const provinces =async (req,res)=>{

  try {
    let provinces =[
      {
        "id": 1,
        "name": "آذربایجان شرقی",
        "slug": "آذربایجان-شرقی"
      },
      {
        "id": 2,
        "name": "آذربایجان غربی",
        "slug": "آذربایجان-غربی"
      },
      {
        "id": 3,
        "name": "اردبیل",
        "slug": "اردبیل"
      },
      {
        "id": 4,
        "name": "اصفهان",
        "slug": "اصفهان"
      },
      {
        "id": 5,
        "name": "البرز",
        "slug": "البرز"
      },
      {
        "id": 6,
        "name": "ایلام",
        "slug": "ایلام"
      },
      {
        "id": 7,
        "name": "بوشهر",
        "slug": "بوشهر"
      },
      {
        "id": 8,
        "name": "تهران",
        "slug": "تهران"
      },
      {
        "id": 9,
        "name": "چهارمحال و بختیاری",
        "slug": "چهارمحال-و-بختیاری"
      },
      {
        "id": 10,
        "name": "خراسان جنوبی",
        "slug": "خراسان-جنوبی"
      },
      {
        "id": 11,
        "name": "خراسان رضوی",
        "slug": "خراسان-رضوی"
      },
      {
        "id": 12,
        "name": "خراسان شمالی",
        "slug": "خراسان-شمالی"
      },
      {
        "id": 13,
        "name": "خوزستان",
        "slug": "خوزستان"
      },
      {
        "id": 14,
        "name": "زنجان",
        "slug": "زنجان"
      },
      {
        "id": 15,
        "name": "سمنان",
        "slug": "سمنان"
      },
      {
        "id": 16,
        "name": "سیستان و بلوچستان",
        "slug": "سیستان-و-بلوچستان"
      },
      {
        "id": 17,
        "name": "فارس",
        "slug": "فارس"
      },
      {
        "id": 18,
        "name": "قزوین",
        "slug": "قزوین"
      },
      {
        "id": 19,
        "name": "قم",
        "slug": "قم"
      },
      {
        "id": 20,
        "name": "کردستان",
        "slug": "کردستان"
      },
      {
        "id": 21,
        "name": "کرمان",
        "slug": "کرمان"
      },
      {
        "id": 22,
        "name": "کرمانشاه",
        "slug": "کرمانشاه"
      },
      {
        "id": 23,
        "name": "کهگیلویه و بویراحمد",
        "slug": "کهگیلویه-و-بویراحمد"
      },
      {
        "id": 24,
        "name": "گلستان",
        "slug": "گلستان"
      },
      {
        "id": 25,
        "name": "لرستان",
        "slug": "لرستان"
      },
      {
        "id": 26,
        "name": "گیلان",
        "slug": "گیلان"
      },
      {
        "id": 27,
        "name": "مازندران",
        "slug": "مازندران"
      },
      {
        "id": 28,
        "name": "مرکزی",
        "slug": "مرکزی"
      },
      {
        "id": 29,
        "name": "هرمزگان",
        "slug": "هرمزگان"
      },
      {
        "id": 30,
        "name": "همدان",
        "slug": "همدان"
      },
      {
        "id": 31,
        "name": "یزد",
        "slug": "یزد"
      }
    ]
      res.status(200).send({
        message:"دریافت استان ها با موفقیت انجام شد",
        data: provinces
      });

  } catch (err) {
    res.status(400).send({
      status: "fail",
      message: err.message,
    });
  }
}


const  cities = async (req,res)=>{
  try {

    let cities =[
      {
        "id": 1,
        "name": "اسکو",
        "slug": "اسکو",
        "province_id": 1
      },
      {
        "id": 2,
        "name": "اهر",
        "slug": "اهر",
        "province_id": 1
      },
      {
        "id": 3,
        "name": "ایلخچی",
        "slug": "ایلخچی",
        "province_id": 1
      },
      {
        "id": 4,
        "name": "آبش احمد",
        "slug": "آبش-احمد",
        "province_id": 1
      },
      {
        "id": 5,
        "name": "آذرشهر",
        "slug": "آذرشهر",
        "province_id": 1
      },
      {
        "id": 6,
        "name": "آقکند",
        "slug": "آقکند",
        "province_id": 1
      },
      {
        "id": 7,
        "name": "باسمنج",
        "slug": "باسمنج",
        "province_id": 1
      },
      {
        "id": 8,
        "name": "بخشایش",
        "slug": "بخشایش",
        "province_id": 1
      },
      {
        "id": 9,
        "name": "بستان آباد",
        "slug": "بستان-آباد",
        "province_id": 1
      },
      {
        "id": 10,
        "name": "بناب",
        "slug": "بناب",
        "province_id": 1
      },
      {
        "id": 11,
        "name": "بناب جدید",
        "slug": "بناب-جدید",
        "province_id": 1
      },
      {
        "id": 12,
        "name": "تبریز",
        "slug": "تبریز",
        "province_id": 1
      },
      {
        "id": 13,
        "name": "ترک",
        "slug": "ترک",
        "province_id": 1
      },
      {
        "id": 14,
        "name": "ترکمانچای",
        "slug": "ترکمانچای",
        "province_id": 1
      },
      {
        "id": 15,
        "name": "تسوج",
        "slug": "تسوج",
        "province_id": 1
      },
      {
        "id": 16,
        "name": "تیکمه داش",
        "slug": "تیکمه-داش",
        "province_id": 1
      },
      {
        "id": 17,
        "name": "جلفا",
        "slug": "جلفا",
        "province_id": 1
      },
      {
        "id": 18,
        "name": "خاروانا",
        "slug": "خاروانا",
        "province_id": 1
      },
      {
        "id": 19,
        "name": "خامنه",
        "slug": "خامنه",
        "province_id": 1
      },
      {
        "id": 20,
        "name": "خراجو",
        "slug": "خراجو",
        "province_id": 1
      },
      {
        "id": 21,
        "name": "خسروشهر",
        "slug": "خسروشهر",
        "province_id": 1
      },
      {
        "id": 22,
        "name": "خضرلو",
        "slug": "خضرلو",
        "province_id": 1
      },
      {
        "id": 23,
        "name": "خمارلو",
        "slug": "خمارلو",
        "province_id": 1
      },
      {
        "id": 24,
        "name": "خواجه",
        "slug": "خواجه",
        "province_id": 1
      },
      {
        "id": 25,
        "name": "دوزدوزان",
        "slug": "دوزدوزان",
        "province_id": 1
      },
      {
        "id": 26,
        "name": "زرنق",
        "slug": "زرنق",
        "province_id": 1
      },
      {
        "id": 27,
        "name": "زنوز",
        "slug": "زنوز",
        "province_id": 1
      },
      {
        "id": 28,
        "name": "سراب",
        "slug": "سراب",
        "province_id": 1
      },
      {
        "id": 29,
        "name": "سردرود",
        "slug": "سردرود",
        "province_id": 1
      },
      {
        "id": 30,
        "name": "سهند",
        "slug": "سهند",
        "province_id": 1
      },
      {
        "id": 31,
        "name": "سیس",
        "slug": "سیس",
        "province_id": 1
      },
      {
        "id": 32,
        "name": "سیه رود",
        "slug": "سیه-رود",
        "province_id": 1
      },
      {
        "id": 33,
        "name": "شبستر",
        "slug": "شبستر",
        "province_id": 1
      },
      {
        "id": 34,
        "name": "شربیان",
        "slug": "شربیان",
        "province_id": 1
      },
      {
        "id": 35,
        "name": "شرفخانه",
        "slug": "شرفخانه",
        "province_id": 1
      },
      {
        "id": 36,
        "name": "شندآباد",
        "slug": "شندآباد",
        "province_id": 1
      },
      {
        "id": 37,
        "name": "صوفیان",
        "slug": "صوفیان",
        "province_id": 1
      },
      {
        "id": 38,
        "name": "عجب شیر",
        "slug": "عجب-شیر",
        "province_id": 1
      },
      {
        "id": 39,
        "name": "قره آغاج",
        "slug": "قره-آغاج",
        "province_id": 1
      },
      {
        "id": 40,
        "name": "کشکسرای",
        "slug": "کشکسرای",
        "province_id": 1
      },
      {
        "id": 41,
        "name": "کلوانق",
        "slug": "کلوانق",
        "province_id": 1
      },
      {
        "id": 42,
        "name": "کلیبر",
        "slug": "کلیبر",
        "province_id": 1
      },
      {
        "id": 43,
        "name": "کوزه کنان",
        "slug": "کوزه-کنان",
        "province_id": 1
      },
      {
        "id": 44,
        "name": "گوگان",
        "slug": "گوگان",
        "province_id": 1
      },
      {
        "id": 45,
        "name": "لیلان",
        "slug": "لیلان",
        "province_id": 1
      },
      {
        "id": 46,
        "name": "مراغه",
        "slug": "مراغه",
        "province_id": 1
      },
      {
        "id": 47,
        "name": "مرند",
        "slug": "مرند",
        "province_id": 1
      },
      {
        "id": 48,
        "name": "ملکان",
        "slug": "ملکان",
        "province_id": 1
      },
      {
        "id": 49,
        "name": "ملک کیان",
        "slug": "ملک-کیان",
        "province_id": 1
      },
      {
        "id": 50,
        "name": "ممقان",
        "slug": "ممقان",
        "province_id": 1
      },
      {
        "id": 51,
        "name": "مهربان",
        "slug": "مهربان",
        "province_id": 1
      },
      {
        "id": 52,
        "name": "میانه",
        "slug": "میانه",
        "province_id": 1
      },
      {
        "id": 53,
        "name": "نظرکهریزی",
        "slug": "نظرکهریزی",
        "province_id": 1
      },
      {
        "id": 54,
        "name": "هادی شهر",
        "slug": "هادی-شهر",
        "province_id": 1
      },
      {
        "id": 55,
        "name": "هرگلان",
        "slug": "هرگلان",
        "province_id": 1
      },
      {
        "id": 56,
        "name": "هریس",
        "slug": "هریس",
        "province_id": 1
      },
      {
        "id": 57,
        "name": "هشترود",
        "slug": "هشترود",
        "province_id": 1
      },
      {
        "id": 58,
        "name": "هوراند",
        "slug": "هوراند",
        "province_id": 1
      },
      {
        "id": 59,
        "name": "وایقان",
        "slug": "وایقان",
        "province_id": 1
      },
      {
        "id": 60,
        "name": "ورزقان",
        "slug": "ورزقان",
        "province_id": 1
      },
      {
        "id": 61,
        "name": "یامچی",
        "slug": "یامچی",
        "province_id": 1
      },
      {
        "id": 62,
        "name": "ارومیه",
        "slug": "ارومیه",
        "province_id": 2
      },
      {
        "id": 63,
        "name": "اشنویه",
        "slug": "اشنویه",
        "province_id": 2
      },
      {
        "id": 64,
        "name": "ایواوغلی",
        "slug": "ایواوغلی",
        "province_id": 2
      },
      {
        "id": 65,
        "name": "آواجیق",
        "slug": "آواجیق",
        "province_id": 2
      },
      {
        "id": 66,
        "name": "باروق",
        "slug": "باروق",
        "province_id": 2
      },
      {
        "id": 67,
        "name": "بازرگان",
        "slug": "بازرگان",
        "province_id": 2
      },
      {
        "id": 68,
        "name": "بوکان",
        "slug": "بوکان",
        "province_id": 2
      },
      {
        "id": 69,
        "name": "پلدشت",
        "slug": "پلدشت",
        "province_id": 2
      },
      {
        "id": 70,
        "name": "پیرانشهر",
        "slug": "پیرانشهر",
        "province_id": 2
      },
      {
        "id": 71,
        "name": "تازه شهر",
        "slug": "تازه-شهر",
        "province_id": 2
      },
      {
        "id": 72,
        "name": "تکاب",
        "slug": "تکاب",
        "province_id": 2
      },
      {
        "id": 73,
        "name": "چهاربرج",
        "slug": "چهاربرج",
        "province_id": 2
      },
      {
        "id": 74,
        "name": "خوی",
        "slug": "خوی",
        "province_id": 2
      },
      {
        "id": 75,
        "name": "دیزج دیز",
        "slug": "دیزج-دیز",
        "province_id": 2
      },
      {
        "id": 76,
        "name": "ربط",
        "slug": "ربط",
        "province_id": 2
      },
      {
        "id": 77,
        "name": "سردشت",
        "slug": "آذربایجان-غربی-سردشت",
        "province_id": 2
      },
      {
        "id": 78,
        "name": "سرو",
        "slug": "سرو",
        "province_id": 2
      },
      {
        "id": 79,
        "name": "سلماس",
        "slug": "سلماس",
        "province_id": 2
      },
      {
        "id": 80,
        "name": "سیلوانه",
        "slug": "سیلوانه",
        "province_id": 2
      },
      {
        "id": 81,
        "name": "سیمینه",
        "slug": "سیمینه",
        "province_id": 2
      },
      {
        "id": 82,
        "name": "سیه چشمه",
        "slug": "سیه-چشمه",
        "province_id": 2
      },
      {
        "id": 83,
        "name": "شاهین دژ",
        "slug": "شاهین-دژ",
        "province_id": 2
      },
      {
        "id": 84,
        "name": "شوط",
        "slug": "شوط",
        "province_id": 2
      },
      {
        "id": 85,
        "name": "فیرورق",
        "slug": "فیرورق",
        "province_id": 2
      },
      {
        "id": 86,
        "name": "قره ضیاءالدین",
        "slug": "قره-ضیاءالدین",
        "province_id": 2
      },
      {
        "id": 87,
        "name": "قطور",
        "slug": "قطور",
        "province_id": 2
      },
      {
        "id": 88,
        "name": "قوشچی",
        "slug": "قوشچی",
        "province_id": 2
      },
      {
        "id": 89,
        "name": "کشاورز",
        "slug": "کشاورز",
        "province_id": 2
      },
      {
        "id": 90,
        "name": "گردکشانه",
        "slug": "گردکشانه",
        "province_id": 2
      },
      {
        "id": 91,
        "name": "ماکو",
        "slug": "ماکو",
        "province_id": 2
      },
      {
        "id": 92,
        "name": "محمدیار",
        "slug": "محمدیار",
        "province_id": 2
      },
      {
        "id": 93,
        "name": "محمودآباد",
        "slug": "آذربایجان-غربی-محمودآباد",
        "province_id": 2
      },
      {
        "id": 94,
        "name": "مهاباد",
        "slug": "آذربایجان-غربی-مهاباد",
        "province_id": 2
      },
      {
        "id": 95,
        "name": "میاندوآب",
        "slug": "میاندوآب",
        "province_id": 2
      },
      {
        "id": 96,
        "name": "میرآباد",
        "slug": "میرآباد",
        "province_id": 2
      },
      {
        "id": 97,
        "name": "نالوس",
        "slug": "نالوس",
        "province_id": 2
      },
      {
        "id": 98,
        "name": "نقده",
        "slug": "نقده",
        "province_id": 2
      },
      {
        "id": 99,
        "name": "نوشین",
        "slug": "نوشین",
        "province_id": 2
      },
      {
        "id": 100,
        "name": "اردبیل",
        "slug": "شهر-اردبیل",
        "province_id": 3
      },
      {
        "id": 101,
        "name": "اصلاندوز",
        "slug": "اصلاندوز",
        "province_id": 3
      },
      {
        "id": 102,
        "name": "آبی بیگلو",
        "slug": "آبی-بیگلو",
        "province_id": 3
      },
      {
        "id": 103,
        "name": "بیله سوار",
        "slug": "بیله-سوار",
        "province_id": 3
      },
      {
        "id": 104,
        "name": "پارس آباد",
        "slug": "پارس-آباد",
        "province_id": 3
      },
      {
        "id": 105,
        "name": "تازه کند",
        "slug": "تازه-کند",
        "province_id": 3
      },
      {
        "id": 106,
        "name": "تازه کندانگوت",
        "slug": "تازه-کندانگوت",
        "province_id": 3
      },
      {
        "id": 107,
        "name": "جعفرآباد",
        "slug": "جعفرآباد",
        "province_id": 3
      },
      {
        "id": 108,
        "name": "خلخال",
        "slug": "خلخال",
        "province_id": 3
      },
      {
        "id": 109,
        "name": "رضی",
        "slug": "رضی",
        "province_id": 3
      },
      {
        "id": 110,
        "name": "سرعین",
        "slug": "سرعین",
        "province_id": 3
      },
      {
        "id": 111,
        "name": "عنبران",
        "slug": "عنبران",
        "province_id": 3
      },
      {
        "id": 112,
        "name": "فخرآباد",
        "slug": "فخرآباد",
        "province_id": 3
      },
      {
        "id": 113,
        "name": "کلور",
        "slug": "کلور",
        "province_id": 3
      },
      {
        "id": 114,
        "name": "کوراییم",
        "slug": "کوراییم",
        "province_id": 3
      },
      {
        "id": 115,
        "name": "گرمی",
        "slug": "گرمی",
        "province_id": 3
      },
      {
        "id": 116,
        "name": "گیوی",
        "slug": "گیوی",
        "province_id": 3
      },
      {
        "id": 117,
        "name": "لاهرود",
        "slug": "لاهرود",
        "province_id": 3
      },
      {
        "id": 118,
        "name": "مشگین شهر",
        "slug": "مشگین-شهر",
        "province_id": 3
      },
      {
        "id": 119,
        "name": "نمین",
        "slug": "نمین",
        "province_id": 3
      },
      {
        "id": 120,
        "name": "نیر",
        "slug": "اردبیل-نیر",
        "province_id": 3
      },
      {
        "id": 121,
        "name": "هشتجین",
        "slug": "هشتجین",
        "province_id": 3
      },
      {
        "id": 122,
        "name": "هیر",
        "slug": "هیر",
        "province_id": 3
      },
      {
        "id": 123,
        "name": "ابریشم",
        "slug": "ابریشم",
        "province_id": 4
      },
      {
        "id": 124,
        "name": "ابوزیدآباد",
        "slug": "ابوزیدآباد",
        "province_id": 4
      },
      {
        "id": 125,
        "name": "اردستان",
        "slug": "اردستان",
        "province_id": 4
      },
      {
        "id": 126,
        "name": "اژیه",
        "slug": "اژیه",
        "province_id": 4
      },
      {
        "id": 127,
        "name": "اصفهان",
        "slug": "شهر-اصفهان",
        "province_id": 4
      },
      {
        "id": 128,
        "name": "افوس",
        "slug": "افوس",
        "province_id": 4
      },
      {
        "id": 129,
        "name": "انارک",
        "slug": "انارک",
        "province_id": 4
      },
      {
        "id": 130,
        "name": "ایمانشهر",
        "slug": "ایمانشهر",
        "province_id": 4
      },
      {
        "id": 131,
        "name": "آران وبیدگل",
        "slug": "آران-وبیدگل",
        "province_id": 4
      },
      {
        "id": 132,
        "name": "بادرود",
        "slug": "بادرود",
        "province_id": 4
      },
      {
        "id": 133,
        "name": "باغ بهادران",
        "slug": "باغ-بهادران",
        "province_id": 4
      },
      {
        "id": 134,
        "name": "بافران",
        "slug": "بافران",
        "province_id": 4
      },
      {
        "id": 135,
        "name": "برزک",
        "slug": "برزک",
        "province_id": 4
      },
      {
        "id": 136,
        "name": "برف انبار",
        "slug": "برف-انبار",
        "province_id": 4
      },
      {
        "id": 137,
        "name": "بهاران شهر",
        "slug": "بهاران-شهر",
        "province_id": 4
      },
      {
        "id": 138,
        "name": "بهارستان",
        "slug": "بهارستان",
        "province_id": 4
      },
      {
        "id": 139,
        "name": "بوئین و میاندشت",
        "slug": "بوئین-میاندشت",
        "province_id": 4
      },
      {
        "id": 140,
        "name": "پیربکران",
        "slug": "پیربکران",
        "province_id": 4
      },
      {
        "id": 141,
        "name": "تودشک",
        "slug": "تودشک",
        "province_id": 4
      },
      {
        "id": 142,
        "name": "تیران",
        "slug": "تیران",
        "province_id": 4
      },
      {
        "id": 143,
        "name": "جندق",
        "slug": "جندق",
        "province_id": 4
      },
      {
        "id": 144,
        "name": "جوزدان",
        "slug": "جوزدان",
        "province_id": 4
      },
      {
        "id": 145,
        "name": "جوشقان و کامو",
        "slug": "جوشقان-کامو",
        "province_id": 4
      },
      {
        "id": 146,
        "name": "چادگان",
        "slug": "چادگان",
        "province_id": 4
      },
      {
        "id": 147,
        "name": "چرمهین",
        "slug": "چرمهین",
        "province_id": 4
      },
      {
        "id": 148,
        "name": "چمگردان",
        "slug": "چمگردان",
        "province_id": 4
      },
      {
        "id": 149,
        "name": "حبیب آباد",
        "slug": "حبیب-آباد",
        "province_id": 4
      },
      {
        "id": 150,
        "name": "حسن آباد",
        "slug": "اصفهان-حسن-آباد",
        "province_id": 4
      },
      {
        "id": 151,
        "name": "حنا",
        "slug": "حنا",
        "province_id": 4
      },
      {
        "id": 152,
        "name": "خالدآباد",
        "slug": "خالدآباد",
        "province_id": 4
      },
      {
        "id": 153,
        "name": "خمینی شهر",
        "slug": "خمینی-شهر",
        "province_id": 4
      },
      {
        "id": 154,
        "name": "خوانسار",
        "slug": "خوانسار",
        "province_id": 4
      },
      {
        "id": 155,
        "name": "خور",
        "slug": "اصفهان-خور",
        "province_id": 4
      },
      {
        "id": 157,
        "name": "خورزوق",
        "slug": "خورزوق",
        "province_id": 4
      },
      {
        "id": 158,
        "name": "داران",
        "slug": "داران",
        "province_id": 4
      },
      {
        "id": 159,
        "name": "دامنه",
        "slug": "دامنه",
        "province_id": 4
      },
      {
        "id": 160,
        "name": "درچه",
        "slug": "درچه",
        "province_id": 4
      },
      {
        "id": 161,
        "name": "دستگرد",
        "slug": "دستگرد",
        "province_id": 4
      },
      {
        "id": 162,
        "name": "دهاقان",
        "slug": "دهاقان",
        "province_id": 4
      },
      {
        "id": 163,
        "name": "دهق",
        "slug": "دهق",
        "province_id": 4
      },
      {
        "id": 164,
        "name": "دولت آباد",
        "slug": "اصفهان-دولت-آباد",
        "province_id": 4
      },
      {
        "id": 165,
        "name": "دیزیچه",
        "slug": "دیزیچه",
        "province_id": 4
      },
      {
        "id": 166,
        "name": "رزوه",
        "slug": "رزوه",
        "province_id": 4
      },
      {
        "id": 167,
        "name": "رضوانشهر",
        "slug": "اصفهان-رضوانشهر",
        "province_id": 4
      },
      {
        "id": 168,
        "name": "زاینده رود",
        "slug": "زاینده-رود",
        "province_id": 4
      },
      {
        "id": 169,
        "name": "زرین شهر",
        "slug": "زرین-شهر",
        "province_id": 4
      },
      {
        "id": 170,
        "name": "زواره",
        "slug": "زواره",
        "province_id": 4
      },
      {
        "id": 171,
        "name": "زیباشهر",
        "slug": "زیباشهر",
        "province_id": 4
      },
      {
        "id": 172,
        "name": "سده لنجان",
        "slug": "سده-لنجان",
        "province_id": 4
      },
      {
        "id": 173,
        "name": "سفیدشهر",
        "slug": "سفیدشهر",
        "province_id": 4
      },
      {
        "id": 174,
        "name": "سگزی",
        "slug": "سگزی",
        "province_id": 4
      },
      {
        "id": 175,
        "name": "سمیرم",
        "slug": "سمیرم",
        "province_id": 4
      },
      {
        "id": 176,
        "name": "شاهین شهر",
        "slug": "شاهین-شهر",
        "province_id": 4
      },
      {
        "id": 177,
        "name": "شهرضا",
        "slug": "شهرضا",
        "province_id": 4
      },
      {
        "id": 178,
        "name": "طالخونچه",
        "slug": "طالخونچه",
        "province_id": 4
      },
      {
        "id": 179,
        "name": "عسگران",
        "slug": "عسگران",
        "province_id": 4
      },
      {
        "id": 180,
        "name": "علویجه",
        "slug": "علویجه",
        "province_id": 4
      },
      {
        "id": 181,
        "name": "فرخی",
        "slug": "فرخی",
        "province_id": 4
      },
      {
        "id": 182,
        "name": "فریدونشهر",
        "slug": "فریدونشهر",
        "province_id": 4
      },
      {
        "id": 183,
        "name": "فلاورجان",
        "slug": "فلاورجان",
        "province_id": 4
      },
      {
        "id": 184,
        "name": "فولادشهر",
        "slug": "فولادشهر",
        "province_id": 4
      },
      {
        "id": 185,
        "name": "قمصر",
        "slug": "قمصر",
        "province_id": 4
      },
      {
        "id": 186,
        "name": "قهجاورستان",
        "slug": "قهجاورستان",
        "province_id": 4
      },
      {
        "id": 187,
        "name": "قهدریجان",
        "slug": "قهدریجان",
        "province_id": 4
      },
      {
        "id": 188,
        "name": "کاشان",
        "slug": "کاشان",
        "province_id": 4
      },
      {
        "id": 189,
        "name": "کرکوند",
        "slug": "کرکوند",
        "province_id": 4
      },
      {
        "id": 190,
        "name": "کلیشاد و سودرجان",
        "slug": "کلیشاد-سودرجان",
        "province_id": 4
      },
      {
        "id": 191,
        "name": "کمشچه",
        "slug": "کمشچه",
        "province_id": 4
      },
      {
        "id": 192,
        "name": "کمه",
        "slug": "کمه",
        "province_id": 4
      },
      {
        "id": 193,
        "name": "کهریزسنگ",
        "slug": "کهریزسنگ",
        "province_id": 4
      },
      {
        "id": 194,
        "name": "کوشک",
        "slug": "کوشک",
        "province_id": 4
      },
      {
        "id": 195,
        "name": "کوهپایه",
        "slug": "کوهپایه",
        "province_id": 4
      },
      {
        "id": 196,
        "name": "گرگاب",
        "slug": "گرگاب",
        "province_id": 4
      },
      {
        "id": 197,
        "name": "گزبرخوار",
        "slug": "گزبرخوار",
        "province_id": 4
      },
      {
        "id": 198,
        "name": "گلپایگان",
        "slug": "گلپایگان",
        "province_id": 4
      },
      {
        "id": 199,
        "name": "گلدشت",
        "slug": "گلدشت",
        "province_id": 4
      },
      {
        "id": 200,
        "name": "گلشهر",
        "slug": "گلشهر",
        "province_id": 4
      },
      {
        "id": 201,
        "name": "گوگد",
        "slug": "گوگد",
        "province_id": 4
      },
      {
        "id": 202,
        "name": "لای بید",
        "slug": "لای-بید",
        "province_id": 4
      },
      {
        "id": 203,
        "name": "مبارکه",
        "slug": "مبارکه",
        "province_id": 4
      },
      {
        "id": 204,
        "name": "مجلسی",
        "slug": "مجلسی",
        "province_id": 4
      },
      {
        "id": 205,
        "name": "محمدآباد",
        "slug": "اصفهان-محمدآباد",
        "province_id": 4
      },
      {
        "id": 206,
        "name": "مشکات",
        "slug": "مشکات",
        "province_id": 4
      },
      {
        "id": 207,
        "name": "منظریه",
        "slug": "منظریه",
        "province_id": 4
      },
      {
        "id": 208,
        "name": "مهاباد",
        "slug": "اصفهان-مهاباد",
        "province_id": 4
      },
      {
        "id": 209,
        "name": "میمه",
        "slug": "اصفهان-میمه",
        "province_id": 4
      },
      {
        "id": 210,
        "name": "نائین",
        "slug": "نائین",
        "province_id": 4
      },
      {
        "id": 211,
        "name": "نجف آباد",
        "slug": "نجف-آباد",
        "province_id": 4
      },
      {
        "id": 212,
        "name": "نصرآباد",
        "slug": "اصفهان-نصرآباد",
        "province_id": 4
      },
      {
        "id": 213,
        "name": "نطنز",
        "slug": "نطنز",
        "province_id": 4
      },
      {
        "id": 214,
        "name": "نوش آباد",
        "slug": "نوش-آباد",
        "province_id": 4
      },
      {
        "id": 215,
        "name": "نیاسر",
        "slug": "نیاسر",
        "province_id": 4
      },
      {
        "id": 216,
        "name": "نیک آباد",
        "slug": "نیک-آباد",
        "province_id": 4
      },
      {
        "id": 217,
        "name": "هرند",
        "slug": "هرند",
        "province_id": 4
      },
      {
        "id": 218,
        "name": "ورزنه",
        "slug": "ورزنه",
        "province_id": 4
      },
      {
        "id": 219,
        "name": "ورنامخواست",
        "slug": "ورنامخواست",
        "province_id": 4
      },
      {
        "id": 220,
        "name": "وزوان",
        "slug": "وزوان",
        "province_id": 4
      },
      {
        "id": 221,
        "name": "ونک",
        "slug": "ونک",
        "province_id": 4
      },
      {
        "id": 222,
        "name": "اسارا",
        "slug": "اسارا",
        "province_id": 5
      },
      {
        "id": 223,
        "name": "اشتهارد",
        "slug": "اشتهارد",
        "province_id": 5
      },
      {
        "id": 224,
        "name": "تنکمان",
        "slug": "تنکمان",
        "province_id": 5
      },
      {
        "id": 225,
        "name": "چهارباغ",
        "slug": "چهارباغ",
        "province_id": 5
      },
      {
        "id": 226,
        "name": "سیف آباد",
        "slug": "سیف-آباد",
        "province_id": 5
      },
      {
        "id": 227,
        "name": "شهر جدید هشتگرد",
        "slug": "شهر-جدید-هشتگرد",
        "province_id": 5
      },
      {
        "id": 228,
        "name": "طالقان",
        "slug": "طالقان",
        "province_id": 5
      },
      {
        "id": 229,
        "name": "کرج",
        "slug": "کرج",
        "province_id": 5
      },
      {
        "id": 230,
        "name": "کمال شهر",
        "slug": "کمال-شهر",
        "province_id": 5
      },
      {
        "id": 231,
        "name": "کوهسار",
        "slug": "کوهسار",
        "province_id": 5
      },
      {
        "id": 232,
        "name": "گرمدره",
        "slug": "گرمدره",
        "province_id": 5
      },
      {
        "id": 233,
        "name": "ماهدشت",
        "slug": "ماهدشت",
        "province_id": 5
      },
      {
        "id": 234,
        "name": "محمدشهر",
        "slug": "البرز-محمدشهر",
        "province_id": 5
      },
      {
        "id": 235,
        "name": "مشکین دشت",
        "slug": "مشکین-دشت",
        "province_id": 5
      },
      {
        "id": 236,
        "name": "نظرآباد",
        "slug": "نظرآباد",
        "province_id": 5
      },
      {
        "id": 237,
        "name": "هشتگرد",
        "slug": "هشتگرد",
        "province_id": 5
      },
      {
        "id": 1117,
        "name": "فردیس",
        "slug": "فردیس",
        "province_id": 5
      },
      {
        "id": 1118,
        "name": "مارلیک",
        "slug": "مارلیک",
        "province_id": 5
      },
      {
        "id": 238,
        "name": "ارکواز",
        "slug": "ارکواز",
        "province_id": 6
      },
      {
        "id": 239,
        "name": "ایلام",
        "slug": "شهر-ایلام",
        "province_id": 6
      },
      {
        "id": 240,
        "name": "ایوان",
        "slug": "ایوان",
        "province_id": 6
      },
      {
        "id": 241,
        "name": "آبدانان",
        "slug": "آبدانان",
        "province_id": 6
      },
      {
        "id": 242,
        "name": "آسمان آباد",
        "slug": "آسمان-آباد",
        "province_id": 6
      },
      {
        "id": 243,
        "name": "بدره",
        "slug": "بدره",
        "province_id": 6
      },
      {
        "id": 244,
        "name": "پهله",
        "slug": "پهله",
        "province_id": 6
      },
      {
        "id": 245,
        "name": "توحید",
        "slug": "توحید",
        "province_id": 6
      },
      {
        "id": 246,
        "name": "چوار",
        "slug": "چوار",
        "province_id": 6
      },
      {
        "id": 247,
        "name": "دره شهر",
        "slug": "دره-شهر",
        "province_id": 6
      },
      {
        "id": 248,
        "name": "دلگشا",
        "slug": "دلگشا",
        "province_id": 6
      },
      {
        "id": 249,
        "name": "دهلران",
        "slug": "دهلران",
        "province_id": 6
      },
      {
        "id": 250,
        "name": "زرنه",
        "slug": "زرنه",
        "province_id": 6
      },
      {
        "id": 251,
        "name": "سراب باغ",
        "slug": "سراب-باغ",
        "province_id": 6
      },
      {
        "id": 252,
        "name": "سرابله",
        "slug": "سرابله",
        "province_id": 6
      },
      {
        "id": 253,
        "name": "صالح آباد",
        "slug": "ایلام-صالح-آباد",
        "province_id": 6
      },
      {
        "id": 254,
        "name": "لومار",
        "slug": "لومار",
        "province_id": 6
      },
      {
        "id": 255,
        "name": "مهران",
        "slug": "مهران",
        "province_id": 6
      },
      {
        "id": 256,
        "name": "مورموری",
        "slug": "مورموری",
        "province_id": 6
      },
      {
        "id": 257,
        "name": "موسیان",
        "slug": "موسیان",
        "province_id": 6
      },
      {
        "id": 258,
        "name": "میمه",
        "slug": "ایلام-میمه",
        "province_id": 6
      },
      {
        "id": 259,
        "name": "امام حسن",
        "slug": "امام-حسن",
        "province_id": 7
      },
      {
        "id": 260,
        "name": "انارستان",
        "slug": "انارستان",
        "province_id": 7
      },
      {
        "id": 261,
        "name": "اهرم",
        "slug": "اهرم",
        "province_id": 7
      },
      {
        "id": 262,
        "name": "آب پخش",
        "slug": "آب-پخش",
        "province_id": 7
      },
      {
        "id": 263,
        "name": "آبدان",
        "slug": "آبدان",
        "province_id": 7
      },
      {
        "id": 264,
        "name": "برازجان",
        "slug": "برازجان",
        "province_id": 7
      },
      {
        "id": 265,
        "name": "بردخون",
        "slug": "بردخون",
        "province_id": 7
      },
      {
        "id": 266,
        "name": "بندردیر",
        "slug": "بندردیر",
        "province_id": 7
      },
      {
        "id": 267,
        "name": "بندردیلم",
        "slug": "بندردیلم",
        "province_id": 7
      },
      {
        "id": 268,
        "name": "بندرریگ",
        "slug": "بندرریگ",
        "province_id": 7
      },
      {
        "id": 269,
        "name": "بندرکنگان",
        "slug": "بندرکنگان",
        "province_id": 7
      },
      {
        "id": 270,
        "name": "بندرگناوه",
        "slug": "بندرگناوه",
        "province_id": 7
      },
      {
        "id": 271,
        "name": "بنک",
        "slug": "بنک",
        "province_id": 7
      },
      {
        "id": 272,
        "name": "بوشهر",
        "slug": "شهر-بوشهر",
        "province_id": 7
      },
      {
        "id": 273,
        "name": "تنگ ارم",
        "slug": "تنگ-ارم",
        "province_id": 7
      },
      {
        "id": 274,
        "name": "جم",
        "slug": "جم",
        "province_id": 7
      },
      {
        "id": 275,
        "name": "چغادک",
        "slug": "چغادک",
        "province_id": 7
      },
      {
        "id": 276,
        "name": "خارک",
        "slug": "خارک",
        "province_id": 7
      },
      {
        "id": 277,
        "name": "خورموج",
        "slug": "خورموج",
        "province_id": 7
      },
      {
        "id": 278,
        "name": "دالکی",
        "slug": "دالکی",
        "province_id": 7
      },
      {
        "id": 279,
        "name": "دلوار",
        "slug": "دلوار",
        "province_id": 7
      },
      {
        "id": 280,
        "name": "ریز",
        "slug": "ریز",
        "province_id": 7
      },
      {
        "id": 281,
        "name": "سعدآباد",
        "slug": "سعدآباد",
        "province_id": 7
      },
      {
        "id": 282,
        "name": "سیراف",
        "slug": "سیراف",
        "province_id": 7
      },
      {
        "id": 283,
        "name": "شبانکاره",
        "slug": "شبانکاره",
        "province_id": 7
      },
      {
        "id": 284,
        "name": "شنبه",
        "slug": "شنبه",
        "province_id": 7
      },
      {
        "id": 285,
        "name": "عسلویه",
        "slug": "عسلویه",
        "province_id": 7
      },
      {
        "id": 286,
        "name": "کاکی",
        "slug": "کاکی",
        "province_id": 7
      },
      {
        "id": 287,
        "name": "کلمه",
        "slug": "کلمه",
        "province_id": 7
      },
      {
        "id": 288,
        "name": "نخل تقی",
        "slug": "نخل-تقی",
        "province_id": 7
      },
      {
        "id": 289,
        "name": "وحدتیه",
        "slug": "وحدتیه",
        "province_id": 7
      },
      {
        "id": 290,
        "name": "ارجمند",
        "slug": "ارجمند",
        "province_id": 8
      },
      {
        "id": 291,
        "name": "اسلامشهر",
        "slug": "اسلامشهر",
        "province_id": 8
      },
      {
        "id": 292,
        "name": "اندیشه",
        "slug": "اندیشه",
        "province_id": 8
      },
      {
        "id": 293,
        "name": "آبسرد",
        "slug": "آبسرد",
        "province_id": 8
      },
      {
        "id": 294,
        "name": "آبعلی",
        "slug": "آبعلی",
        "province_id": 8
      },
      {
        "id": 295,
        "name": "باغستان",
        "slug": "باغستان",
        "province_id": 8
      },
      {
        "id": 296,
        "name": "باقرشهر",
        "slug": "باقرشهر",
        "province_id": 8
      },
      {
        "id": 297,
        "name": "بومهن",
        "slug": "بومهن",
        "province_id": 8
      },
      {
        "id": 298,
        "name": "پاکدشت",
        "slug": "پاکدشت",
        "province_id": 8
      },
      {
        "id": 299,
        "name": "پردیس",
        "slug": "پردیس",
        "province_id": 8
      },
      {
        "id": 300,
        "name": "پیشوا",
        "slug": "پیشوا",
        "province_id": 8
      },
      {
        "id": 301,
        "name": "تهران",
        "slug": "شهر-تهران",
        "province_id": 8
      },
      {
        "id": 302,
        "name": "جوادآباد",
        "slug": "جوادآباد",
        "province_id": 8
      },
      {
        "id": 303,
        "name": "چهاردانگه",
        "slug": "چهاردانگه",
        "province_id": 8
      },
      {
        "id": 304,
        "name": "حسن آباد",
        "slug": "تهران-حسن-آباد",
        "province_id": 8
      },
      {
        "id": 305,
        "name": "دماوند",
        "slug": "دماوند",
        "province_id": 8
      },
      {
        "id": 306,
        "name": "دیزین",
        "slug": "دیزین",
        "province_id": 8
      },
      {
        "id": 307,
        "name": "ری",
        "slug": "ری",
        "province_id": 8
      },
      {
        "id": 308,
        "name": "رباط کریم",
        "slug": "رباط-کریم",
        "province_id": 8
      },
      {
        "id": 309,
        "name": "رودهن",
        "slug": "رودهن",
        "province_id": 8
      },
      {
        "id": 310,
        "name": "شاهدشهر",
        "slug": "شاهدشهر",
        "province_id": 8
      },
      {
        "id": 311,
        "name": "شریف آباد",
        "slug": "شریف-آباد",
        "province_id": 8
      },
      {
        "id": 312,
        "name": "شمشک",
        "slug": "شمشک",
        "province_id": 8
      },
      {
        "id": 313,
        "name": "شهریار",
        "slug": "شهریار",
        "province_id": 8
      },
      {
        "id": 314,
        "name": "صالح آباد",
        "slug": "تهران-صالح-آباد",
        "province_id": 8
      },
      {
        "id": 315,
        "name": "صباشهر",
        "slug": "صباشهر",
        "province_id": 8
      },
      {
        "id": 316,
        "name": "صفادشت",
        "slug": "صفادشت",
        "province_id": 8
      },
      {
        "id": 317,
        "name": "فردوسیه",
        "slug": "فردوسیه",
        "province_id": 8
      },
      {
        "id": 318,
        "name": "فشم",
        "slug": "فشم",
        "province_id": 8
      },
      {
        "id": 319,
        "name": "فیروزکوه",
        "slug": "فیروزکوه",
        "province_id": 8
      },
      {
        "id": 320,
        "name": "قدس",
        "slug": "قدس",
        "province_id": 8
      },
      {
        "id": 321,
        "name": "قرچک",
        "slug": "قرچک",
        "province_id": 8
      },
      {
        "id": 322,
        "name": "کهریزک",
        "slug": "کهریزک",
        "province_id": 8
      },
      {
        "id": 323,
        "name": "کیلان",
        "slug": "کیلان",
        "province_id": 8
      },
      {
        "id": 324,
        "name": "گلستان",
        "slug": "شهر-گلستان",
        "province_id": 8
      },
      {
        "id": 325,
        "name": "لواسان",
        "slug": "لواسان",
        "province_id": 8
      },
      {
        "id": 326,
        "name": "ملارد",
        "slug": "ملارد",
        "province_id": 8
      },
      {
        "id": 327,
        "name": "میگون",
        "slug": "میگون",
        "province_id": 8
      },
      {
        "id": 328,
        "name": "نسیم شهر",
        "slug": "نسیم-شهر",
        "province_id": 8
      },
      {
        "id": 329,
        "name": "نصیرآباد",
        "slug": "نصیرآباد",
        "province_id": 8
      },
      {
        "id": 330,
        "name": "وحیدیه",
        "slug": "وحیدیه",
        "province_id": 8
      },
      {
        "id": 331,
        "name": "ورامین",
        "slug": "ورامین",
        "province_id": 8
      },
      {
        "id": 1116,
        "name": "پرند",
        "slug": "پرند",
        "province_id": 8
      },
      {
        "id": 332,
        "name": "اردل",
        "slug": "اردل",
        "province_id": 9
      },
      {
        "id": 333,
        "name": "آلونی",
        "slug": "آلونی",
        "province_id": 9
      },
      {
        "id": 334,
        "name": "باباحیدر",
        "slug": "باباحیدر",
        "province_id": 9
      },
      {
        "id": 335,
        "name": "بروجن",
        "slug": "بروجن",
        "province_id": 9
      },
      {
        "id": 336,
        "name": "بلداجی",
        "slug": "بلداجی",
        "province_id": 9
      },
      {
        "id": 337,
        "name": "بن",
        "slug": "بن",
        "province_id": 9
      },
      {
        "id": 338,
        "name": "جونقان",
        "slug": "جونقان",
        "province_id": 9
      },
      {
        "id": 339,
        "name": "چلگرد",
        "slug": "چلگرد",
        "province_id": 9
      },
      {
        "id": 340,
        "name": "سامان",
        "slug": "سامان",
        "province_id": 9
      },
      {
        "id": 341,
        "name": "سفیددشت",
        "slug": "سفیددشت",
        "province_id": 9
      },
      {
        "id": 342,
        "name": "سودجان",
        "slug": "سودجان",
        "province_id": 9
      },
      {
        "id": 343,
        "name": "سورشجان",
        "slug": "سورشجان",
        "province_id": 9
      },
      {
        "id": 344,
        "name": "شلمزار",
        "slug": "شلمزار",
        "province_id": 9
      },
      {
        "id": 345,
        "name": "شهرکرد",
        "slug": "شهرکرد",
        "province_id": 9
      },
      {
        "id": 346,
        "name": "طاقانک",
        "slug": "طاقانک",
        "province_id": 9
      },
      {
        "id": 347,
        "name": "فارسان",
        "slug": "فارسان",
        "province_id": 9
      },
      {
        "id": 348,
        "name": "فرادبنه",
        "slug": "فرادبنه",
        "province_id": 9
      },
      {
        "id": 349,
        "name": "فرخ شهر",
        "slug": "فرخ-شهر",
        "province_id": 9
      },
      {
        "id": 350,
        "name": "کیان",
        "slug": "کیان",
        "province_id": 9
      },
      {
        "id": 351,
        "name": "گندمان",
        "slug": "گندمان",
        "province_id": 9
      },
      {
        "id": 352,
        "name": "گهرو",
        "slug": "گهرو",
        "province_id": 9
      },
      {
        "id": 353,
        "name": "لردگان",
        "slug": "لردگان",
        "province_id": 9
      },
      {
        "id": 354,
        "name": "مال خلیفه",
        "slug": "مال-خلیفه",
        "province_id": 9
      },
      {
        "id": 355,
        "name": "ناغان",
        "slug": "ناغان",
        "province_id": 9
      },
      {
        "id": 356,
        "name": "نافچ",
        "slug": "نافچ",
        "province_id": 9
      },
      {
        "id": 357,
        "name": "نقنه",
        "slug": "نقنه",
        "province_id": 9
      },
      {
        "id": 358,
        "name": "هفشجان",
        "slug": "هفشجان",
        "province_id": 9
      },
      {
        "id": 359,
        "name": "ارسک",
        "slug": "ارسک",
        "province_id": 10
      },
      {
        "id": 360,
        "name": "اسدیه",
        "slug": "اسدیه",
        "province_id": 10
      },
      {
        "id": 361,
        "name": "اسفدن",
        "slug": "اسفدن",
        "province_id": 10
      },
      {
        "id": 362,
        "name": "اسلامیه",
        "slug": "اسلامیه",
        "province_id": 10
      },
      {
        "id": 363,
        "name": "آرین شهر",
        "slug": "آرین-شهر",
        "province_id": 10
      },
      {
        "id": 364,
        "name": "آیسک",
        "slug": "آیسک",
        "province_id": 10
      },
      {
        "id": 365,
        "name": "بشرویه",
        "slug": "بشرویه",
        "province_id": 10
      },
      {
        "id": 366,
        "name": "بیرجند",
        "slug": "بیرجند",
        "province_id": 10
      },
      {
        "id": 367,
        "name": "حاجی آباد",
        "slug": "خراسان-جنوبی-حاجی-آباد",
        "province_id": 10
      },
      {
        "id": 368,
        "name": "خضری دشت بیاض",
        "slug": "خضری-دشت-بیاض",
        "province_id": 10
      },
      {
        "id": 369,
        "name": "خوسف",
        "slug": "خوسف",
        "province_id": 10
      },
      {
        "id": 370,
        "name": "زهان",
        "slug": "زهان",
        "province_id": 10
      },
      {
        "id": 371,
        "name": "سرایان",
        "slug": "سرایان",
        "province_id": 10
      },
      {
        "id": 372,
        "name": "سربیشه",
        "slug": "سربیشه",
        "province_id": 10
      },
      {
        "id": 373,
        "name": "سه قلعه",
        "slug": "سه-قلعه",
        "province_id": 10
      },
      {
        "id": 374,
        "name": "شوسف",
        "slug": "شوسف",
        "province_id": 10
      },
      {
        "id": 375,
        "name": "طبس ",
        "slug": "خراسان-جنوبی-طبس-",
        "province_id": 10
      },
      {
        "id": 376,
        "name": "فردوس",
        "slug": "فردوس",
        "province_id": 10
      },
      {
        "id": 377,
        "name": "قاین",
        "slug": "قاین",
        "province_id": 10
      },
      {
        "id": 378,
        "name": "قهستان",
        "slug": "قهستان",
        "province_id": 10
      },
      {
        "id": 379,
        "name": "محمدشهر",
        "slug": "خراسان-جنوبی-محمدشهر",
        "province_id": 10
      },
      {
        "id": 380,
        "name": "مود",
        "slug": "مود",
        "province_id": 10
      },
      {
        "id": 381,
        "name": "نهبندان",
        "slug": "نهبندان",
        "province_id": 10
      },
      {
        "id": 382,
        "name": "نیمبلوک",
        "slug": "نیمبلوک",
        "province_id": 10
      },
      {
        "id": 383,
        "name": "احمدآباد صولت",
        "slug": "احمدآباد-صولت",
        "province_id": 11
      },
      {
        "id": 384,
        "name": "انابد",
        "slug": "انابد",
        "province_id": 11
      },
      {
        "id": 385,
        "name": "باجگیران",
        "slug": "باجگیران",
        "province_id": 11
      },
      {
        "id": 386,
        "name": "باخرز",
        "slug": "باخرز",
        "province_id": 11
      },
      {
        "id": 387,
        "name": "بار",
        "slug": "بار",
        "province_id": 11
      },
      {
        "id": 388,
        "name": "بایگ",
        "slug": "بایگ",
        "province_id": 11
      },
      {
        "id": 389,
        "name": "بجستان",
        "slug": "بجستان",
        "province_id": 11
      },
      {
        "id": 390,
        "name": "بردسکن",
        "slug": "بردسکن",
        "province_id": 11
      },
      {
        "id": 391,
        "name": "بیدخت",
        "slug": "بیدخت",
        "province_id": 11
      },
      {
        "id": 392,
        "name": "تایباد",
        "slug": "تایباد",
        "province_id": 11
      },
      {
        "id": 393,
        "name": "تربت جام",
        "slug": "تربت-جام",
        "province_id": 11
      },
      {
        "id": 394,
        "name": "تربت حیدریه",
        "slug": "تربت-حیدریه",
        "province_id": 11
      },
      {
        "id": 395,
        "name": "جغتای",
        "slug": "جغتای",
        "province_id": 11
      },
      {
        "id": 396,
        "name": "جنگل",
        "slug": "جنگل",
        "province_id": 11
      },
      {
        "id": 397,
        "name": "چاپشلو",
        "slug": "چاپشلو",
        "province_id": 11
      },
      {
        "id": 398,
        "name": "چکنه",
        "slug": "چکنه",
        "province_id": 11
      },
      {
        "id": 399,
        "name": "چناران",
        "slug": "چناران",
        "province_id": 11
      },
      {
        "id": 400,
        "name": "خرو",
        "slug": "خرو",
        "province_id": 11
      },
      {
        "id": 401,
        "name": "خلیل آباد",
        "slug": "خلیل-آباد",
        "province_id": 11
      },
      {
        "id": 402,
        "name": "خواف",
        "slug": "خواف",
        "province_id": 11
      },
      {
        "id": 403,
        "name": "داورزن",
        "slug": "داورزن",
        "province_id": 11
      },
      {
        "id": 404,
        "name": "درگز",
        "slug": "درگز",
        "province_id": 11
      },
      {
        "id": 405,
        "name": "در رود",
        "slug": "در-رود",
        "province_id": 11
      },
      {
        "id": 406,
        "name": "دولت آباد",
        "slug": "خراسان-رضوی-دولت-آباد",
        "province_id": 11
      },
      {
        "id": 407,
        "name": "رباط سنگ",
        "slug": "رباط-سنگ",
        "province_id": 11
      },
      {
        "id": 408,
        "name": "رشتخوار",
        "slug": "رشتخوار",
        "province_id": 11
      },
      {
        "id": 409,
        "name": "رضویه",
        "slug": "رضویه",
        "province_id": 11
      },
      {
        "id": 410,
        "name": "روداب",
        "slug": "روداب",
        "province_id": 11
      },
      {
        "id": 411,
        "name": "ریوش",
        "slug": "ریوش",
        "province_id": 11
      },
      {
        "id": 412,
        "name": "سبزوار",
        "slug": "سبزوار",
        "province_id": 11
      },
      {
        "id": 413,
        "name": "سرخس",
        "slug": "سرخس",
        "province_id": 11
      },
      {
        "id": 414,
        "name": "سفیدسنگ",
        "slug": "سفیدسنگ",
        "province_id": 11
      },
      {
        "id": 415,
        "name": "سلامی",
        "slug": "سلامی",
        "province_id": 11
      },
      {
        "id": 416,
        "name": "سلطان آباد",
        "slug": "سلطان-آباد",
        "province_id": 11
      },
      {
        "id": 417,
        "name": "سنگان",
        "slug": "سنگان",
        "province_id": 11
      },
      {
        "id": 418,
        "name": "شادمهر",
        "slug": "شادمهر",
        "province_id": 11
      },
      {
        "id": 419,
        "name": "شاندیز",
        "slug": "شاندیز",
        "province_id": 11
      },
      {
        "id": 420,
        "name": "ششتمد",
        "slug": "ششتمد",
        "province_id": 11
      },
      {
        "id": 421,
        "name": "شهرآباد",
        "slug": "شهرآباد",
        "province_id": 11
      },
      {
        "id": 422,
        "name": "شهرزو",
        "slug": "شهرزو",
        "province_id": 11
      },
      {
        "id": 423,
        "name": "صالح آباد",
        "slug": "خراسان-رضوی-صالح-آباد",
        "province_id": 11
      },
      {
        "id": 424,
        "name": "طرقبه",
        "slug": "طرقبه",
        "province_id": 11
      },
      {
        "id": 425,
        "name": "عشق آباد",
        "slug": "خراسان-رضوی-عشق-آباد",
        "province_id": 11
      },
      {
        "id": 426,
        "name": "فرهادگرد",
        "slug": "فرهادگرد",
        "province_id": 11
      },
      {
        "id": 427,
        "name": "فریمان",
        "slug": "فریمان",
        "province_id": 11
      },
      {
        "id": 428,
        "name": "فیروزه",
        "slug": "فیروزه",
        "province_id": 11
      },
      {
        "id": 429,
        "name": "فیض آباد",
        "slug": "فیض-آباد",
        "province_id": 11
      },
      {
        "id": 430,
        "name": "قاسم آباد",
        "slug": "قاسم-آباد",
        "province_id": 11
      },
      {
        "id": 431,
        "name": "قدمگاه",
        "slug": "قدمگاه",
        "province_id": 11
      },
      {
        "id": 432,
        "name": "قلندرآباد",
        "slug": "قلندرآباد",
        "province_id": 11
      },
      {
        "id": 433,
        "name": "قوچان",
        "slug": "قوچان",
        "province_id": 11
      },
      {
        "id": 434,
        "name": "کاخک",
        "slug": "کاخک",
        "province_id": 11
      },
      {
        "id": 435,
        "name": "کاریز",
        "slug": "کاریز",
        "province_id": 11
      },
      {
        "id": 436,
        "name": "کاشمر",
        "slug": "کاشمر",
        "province_id": 11
      },
      {
        "id": 437,
        "name": "کدکن",
        "slug": "کدکن",
        "province_id": 11
      },
      {
        "id": 438,
        "name": "کلات",
        "slug": "کلات",
        "province_id": 11
      },
      {
        "id": 439,
        "name": "کندر",
        "slug": "کندر",
        "province_id": 11
      },
      {
        "id": 440,
        "name": "گلمکان",
        "slug": "گلمکان",
        "province_id": 11
      },
      {
        "id": 441,
        "name": "گناباد",
        "slug": "گناباد",
        "province_id": 11
      },
      {
        "id": 442,
        "name": "لطف آباد",
        "slug": "لطف-آباد",
        "province_id": 11
      },
      {
        "id": 443,
        "name": "مزدآوند",
        "slug": "مزدآوند",
        "province_id": 11
      },
      {
        "id": 444,
        "name": "مشهد",
        "slug": "مشهد",
        "province_id": 11
      },
      {
        "id": 445,
        "name": "ملک آباد",
        "slug": "ملک-آباد",
        "province_id": 11
      },
      {
        "id": 446,
        "name": "نشتیفان",
        "slug": "نشتیفان",
        "province_id": 11
      },
      {
        "id": 447,
        "name": "نصرآباد",
        "slug": "خراسان-رضوی-نصرآباد",
        "province_id": 11
      },
      {
        "id": 448,
        "name": "نقاب",
        "slug": "نقاب",
        "province_id": 11
      },
      {
        "id": 449,
        "name": "نوخندان",
        "slug": "نوخندان",
        "province_id": 11
      },
      {
        "id": 450,
        "name": "نیشابور",
        "slug": "نیشابور",
        "province_id": 11
      },
      {
        "id": 451,
        "name": "نیل شهر",
        "slug": "نیل-شهر",
        "province_id": 11
      },
      {
        "id": 452,
        "name": "همت آباد",
        "slug": "همت-آباد",
        "province_id": 11
      },
      {
        "id": 453,
        "name": "یونسی",
        "slug": "یونسی",
        "province_id": 11
      },
      {
        "id": 454,
        "name": "اسفراین",
        "slug": "اسفراین",
        "province_id": 12
      },
      {
        "id": 455,
        "name": "ایور",
        "slug": "ایور",
        "province_id": 12
      },
      {
        "id": 456,
        "name": "آشخانه",
        "slug": "آشخانه",
        "province_id": 12
      },
      {
        "id": 457,
        "name": "بجنورد",
        "slug": "بجنورد",
        "province_id": 12
      },
      {
        "id": 458,
        "name": "پیش قلعه",
        "slug": "پیش-قلعه",
        "province_id": 12
      },
      {
        "id": 459,
        "name": "تیتکانلو",
        "slug": "تیتکانلو",
        "province_id": 12
      },
      {
        "id": 460,
        "name": "جاجرم",
        "slug": "جاجرم",
        "province_id": 12
      },
      {
        "id": 461,
        "name": "حصارگرمخان",
        "slug": "حصارگرمخان",
        "province_id": 12
      },
      {
        "id": 462,
        "name": "درق",
        "slug": "درق",
        "province_id": 12
      },
      {
        "id": 463,
        "name": "راز",
        "slug": "راز",
        "province_id": 12
      },
      {
        "id": 464,
        "name": "سنخواست",
        "slug": "سنخواست",
        "province_id": 12
      },
      {
        "id": 465,
        "name": "شوقان",
        "slug": "شوقان",
        "province_id": 12
      },
      {
        "id": 466,
        "name": "شیروان",
        "slug": "شیروان",
        "province_id": 12
      },
      {
        "id": 467,
        "name": "صفی آباد",
        "slug": "خراسان-شمالی-صفی-آباد",
        "province_id": 12
      },
      {
        "id": 468,
        "name": "فاروج",
        "slug": "فاروج",
        "province_id": 12
      },
      {
        "id": 469,
        "name": "قاضی",
        "slug": "قاضی",
        "province_id": 12
      },
      {
        "id": 470,
        "name": "گرمه",
        "slug": "گرمه",
        "province_id": 12
      },
      {
        "id": 471,
        "name": "لوجلی",
        "slug": "لوجلی",
        "province_id": 12
      },
      {
        "id": 472,
        "name": "اروندکنار",
        "slug": "اروندکنار",
        "province_id": 13
      },
      {
        "id": 473,
        "name": "الوان",
        "slug": "الوان",
        "province_id": 13
      },
      {
        "id": 474,
        "name": "امیدیه",
        "slug": "امیدیه",
        "province_id": 13
      },
      {
        "id": 475,
        "name": "اندیمشک",
        "slug": "اندیمشک",
        "province_id": 13
      },
      {
        "id": 476,
        "name": "اهواز",
        "slug": "اهواز",
        "province_id": 13
      },
      {
        "id": 477,
        "name": "ایذه",
        "slug": "ایذه",
        "province_id": 13
      },
      {
        "id": 478,
        "name": "آبادان",
        "slug": "آبادان",
        "province_id": 13
      },
      {
        "id": 479,
        "name": "آغاجاری",
        "slug": "آغاجاری",
        "province_id": 13
      },
      {
        "id": 480,
        "name": "باغ ملک",
        "slug": "باغ-ملک",
        "province_id": 13
      },
      {
        "id": 481,
        "name": "بستان",
        "slug": "بستان",
        "province_id": 13
      },
      {
        "id": 482,
        "name": "بندرامام خمینی",
        "slug": "بندرامام-خمینی",
        "province_id": 13
      },
      {
        "id": 483,
        "name": "بندرماهشهر",
        "slug": "بندرماهشهر",
        "province_id": 13
      },
      {
        "id": 484,
        "name": "بهبهان",
        "slug": "بهبهان",
        "province_id": 13
      },
      {
        "id": 485,
        "name": "ترکالکی",
        "slug": "ترکالکی",
        "province_id": 13
      },
      {
        "id": 486,
        "name": "جایزان",
        "slug": "جایزان",
        "province_id": 13
      },
      {
        "id": 487,
        "name": "چمران",
        "slug": "چمران",
        "province_id": 13
      },
      {
        "id": 488,
        "name": "چویبده",
        "slug": "چویبده",
        "province_id": 13
      },
      {
        "id": 489,
        "name": "حر",
        "slug": "حر",
        "province_id": 13
      },
      {
        "id": 490,
        "name": "حسینیه",
        "slug": "حسینیه",
        "province_id": 13
      },
      {
        "id": 491,
        "name": "حمزه",
        "slug": "حمزه",
        "province_id": 13
      },
      {
        "id": 492,
        "name": "حمیدیه",
        "slug": "حمیدیه",
        "province_id": 13
      },
      {
        "id": 493,
        "name": "خرمشهر",
        "slug": "خرمشهر",
        "province_id": 13
      },
      {
        "id": 494,
        "name": "دارخوین",
        "slug": "دارخوین",
        "province_id": 13
      },
      {
        "id": 495,
        "name": "دزآب",
        "slug": "دزآب",
        "province_id": 13
      },
      {
        "id": 496,
        "name": "دزفول",
        "slug": "دزفول",
        "province_id": 13
      },
      {
        "id": 497,
        "name": "دهدز",
        "slug": "دهدز",
        "province_id": 13
      },
      {
        "id": 498,
        "name": "رامشیر",
        "slug": "رامشیر",
        "province_id": 13
      },
      {
        "id": 499,
        "name": "رامهرمز",
        "slug": "رامهرمز",
        "province_id": 13
      },
      {
        "id": 500,
        "name": "رفیع",
        "slug": "رفیع",
        "province_id": 13
      },
      {
        "id": 501,
        "name": "زهره",
        "slug": "زهره",
        "province_id": 13
      },
      {
        "id": 502,
        "name": "سالند",
        "slug": "سالند",
        "province_id": 13
      },
      {
        "id": 503,
        "name": "سردشت",
        "slug": "خوزستان-سردشت",
        "province_id": 13
      },
      {
        "id": 504,
        "name": "سوسنگرد",
        "slug": "سوسنگرد",
        "province_id": 13
      },
      {
        "id": 505,
        "name": "شادگان",
        "slug": "شادگان",
        "province_id": 13
      },
      {
        "id": 506,
        "name": "شاوور",
        "slug": "شاوور",
        "province_id": 13
      },
      {
        "id": 507,
        "name": "شرافت",
        "slug": "شرافت",
        "province_id": 13
      },
      {
        "id": 508,
        "name": "شوش",
        "slug": "شوش",
        "province_id": 13
      },
      {
        "id": 509,
        "name": "شوشتر",
        "slug": "شوشتر",
        "province_id": 13
      },
      {
        "id": 510,
        "name": "شیبان",
        "slug": "شیبان",
        "province_id": 13
      },
      {
        "id": 511,
        "name": "صالح شهر",
        "slug": "صالح-شهر",
        "province_id": 13
      },
      {
        "id": 512,
        "name": "صفی آباد",
        "slug": "خوزستان-صفی-آباد",
        "province_id": 13
      },
      {
        "id": 513,
        "name": "صیدون",
        "slug": "صیدون",
        "province_id": 13
      },
      {
        "id": 514,
        "name": "قلعه تل",
        "slug": "قلعه-تل",
        "province_id": 13
      },
      {
        "id": 515,
        "name": "قلعه خواجه",
        "slug": "قلعه-خواجه",
        "province_id": 13
      },
      {
        "id": 516,
        "name": "گتوند",
        "slug": "گتوند",
        "province_id": 13
      },
      {
        "id": 517,
        "name": "لالی",
        "slug": "لالی",
        "province_id": 13
      },
      {
        "id": 518,
        "name": "مسجدسلیمان",
        "slug": "مسجدسلیمان",
        "province_id": 13
      },
      {
        "id": 520,
        "name": "ملاثانی",
        "slug": "ملاثانی",
        "province_id": 13
      },
      {
        "id": 521,
        "name": "میانرود",
        "slug": "میانرود",
        "province_id": 13
      },
      {
        "id": 522,
        "name": "مینوشهر",
        "slug": "مینوشهر",
        "province_id": 13
      },
      {
        "id": 523,
        "name": "هفتگل",
        "slug": "هفتگل",
        "province_id": 13
      },
      {
        "id": 524,
        "name": "هندیجان",
        "slug": "هندیجان",
        "province_id": 13
      },
      {
        "id": 525,
        "name": "هویزه",
        "slug": "هویزه",
        "province_id": 13
      },
      {
        "id": 526,
        "name": "ویس",
        "slug": "ویس",
        "province_id": 13
      },
      {
        "id": 527,
        "name": "ابهر",
        "slug": "ابهر",
        "province_id": 14
      },
      {
        "id": 528,
        "name": "ارمغان خانه",
        "slug": "ارمغان-خانه",
        "province_id": 14
      },
      {
        "id": 529,
        "name": "آب بر",
        "slug": "آب-بر",
        "province_id": 14
      },
      {
        "id": 530,
        "name": "چورزق",
        "slug": "چورزق",
        "province_id": 14
      },
      {
        "id": 531,
        "name": "حلب",
        "slug": "حلب",
        "province_id": 14
      },
      {
        "id": 532,
        "name": "خرمدره",
        "slug": "خرمدره",
        "province_id": 14
      },
      {
        "id": 533,
        "name": "دندی",
        "slug": "دندی",
        "province_id": 14
      },
      {
        "id": 534,
        "name": "زرین آباد",
        "slug": "زرین-آباد",
        "province_id": 14
      },
      {
        "id": 535,
        "name": "زرین رود",
        "slug": "زرین-رود",
        "province_id": 14
      },
      {
        "id": 536,
        "name": "زنجان",
        "slug": "شهر-زنجان",
        "province_id": 14
      },
      {
        "id": 537,
        "name": "سجاس",
        "slug": "سجاس",
        "province_id": 14
      },
      {
        "id": 538,
        "name": "سلطانیه",
        "slug": "سلطانیه",
        "province_id": 14
      },
      {
        "id": 539,
        "name": "سهرورد",
        "slug": "سهرورد",
        "province_id": 14
      },
      {
        "id": 540,
        "name": "صائین قلعه",
        "slug": "صائین-قلعه",
        "province_id": 14
      },
      {
        "id": 541,
        "name": "قیدار",
        "slug": "قیدار",
        "province_id": 14
      },
      {
        "id": 542,
        "name": "گرماب",
        "slug": "گرماب",
        "province_id": 14
      },
      {
        "id": 543,
        "name": "ماه نشان",
        "slug": "ماه-نشان",
        "province_id": 14
      },
      {
        "id": 544,
        "name": "هیدج",
        "slug": "هیدج",
        "province_id": 14
      },
      {
        "id": 545,
        "name": "امیریه",
        "slug": "امیریه",
        "province_id": 15
      },
      {
        "id": 546,
        "name": "ایوانکی",
        "slug": "ایوانکی",
        "province_id": 15
      },
      {
        "id": 547,
        "name": "آرادان",
        "slug": "آرادان",
        "province_id": 15
      },
      {
        "id": 548,
        "name": "بسطام",
        "slug": "بسطام",
        "province_id": 15
      },
      {
        "id": 549,
        "name": "بیارجمند",
        "slug": "بیارجمند",
        "province_id": 15
      },
      {
        "id": 550,
        "name": "دامغان",
        "slug": "دامغان",
        "province_id": 15
      },
      {
        "id": 551,
        "name": "درجزین",
        "slug": "درجزین",
        "province_id": 15
      },
      {
        "id": 552,
        "name": "دیباج",
        "slug": "دیباج",
        "province_id": 15
      },
      {
        "id": 553,
        "name": "سرخه",
        "slug": "سرخه",
        "province_id": 15
      },
      {
        "id": 554,
        "name": "سمنان",
        "slug": "شهر-سمنان",
        "province_id": 15
      },
      {
        "id": 555,
        "name": "شاهرود",
        "slug": "شاهرود",
        "province_id": 15
      },
      {
        "id": 556,
        "name": "شهمیرزاد",
        "slug": "شهمیرزاد",
        "province_id": 15
      },
      {
        "id": 557,
        "name": "کلاته خیج",
        "slug": "کلاته-خیج",
        "province_id": 15
      },
      {
        "id": 558,
        "name": "گرمسار",
        "slug": "گرمسار",
        "province_id": 15
      },
      {
        "id": 559,
        "name": "مجن",
        "slug": "مجن",
        "province_id": 15
      },
      {
        "id": 560,
        "name": "مهدی شهر",
        "slug": "مهدی-شهر",
        "province_id": 15
      },
      {
        "id": 561,
        "name": "میامی",
        "slug": "میامی",
        "province_id": 15
      },
      {
        "id": 562,
        "name": "ادیمی",
        "slug": "ادیمی",
        "province_id": 16
      },
      {
        "id": 563,
        "name": "اسپکه",
        "slug": "اسپکه",
        "province_id": 16
      },
      {
        "id": 564,
        "name": "ایرانشهر",
        "slug": "ایرانشهر",
        "province_id": 16
      },
      {
        "id": 565,
        "name": "بزمان",
        "slug": "بزمان",
        "province_id": 16
      },
      {
        "id": 566,
        "name": "بمپور",
        "slug": "بمپور",
        "province_id": 16
      },
      {
        "id": 567,
        "name": "بنت",
        "slug": "بنت",
        "province_id": 16
      },
      {
        "id": 568,
        "name": "بنجار",
        "slug": "بنجار",
        "province_id": 16
      },
      {
        "id": 569,
        "name": "پیشین",
        "slug": "پیشین",
        "province_id": 16
      },
      {
        "id": 570,
        "name": "جالق",
        "slug": "جالق",
        "province_id": 16
      },
      {
        "id": 571,
        "name": "چابهار",
        "slug": "چابهار",
        "province_id": 16
      },
      {
        "id": 572,
        "name": "خاش",
        "slug": "خاش",
        "province_id": 16
      },
      {
        "id": 573,
        "name": "دوست محمد",
        "slug": "دوست-محمد",
        "province_id": 16
      },
      {
        "id": 574,
        "name": "راسک",
        "slug": "راسک",
        "province_id": 16
      },
      {
        "id": 575,
        "name": "زابل",
        "slug": "زابل",
        "province_id": 16
      },
      {
        "id": 576,
        "name": "زابلی",
        "slug": "زابلی",
        "province_id": 16
      },
      {
        "id": 577,
        "name": "زاهدان",
        "slug": "زاهدان",
        "province_id": 16
      },
      {
        "id": 578,
        "name": "زهک",
        "slug": "زهک",
        "province_id": 16
      },
      {
        "id": 579,
        "name": "سراوان",
        "slug": "سراوان",
        "province_id": 16
      },
      {
        "id": 580,
        "name": "سرباز",
        "slug": "سرباز",
        "province_id": 16
      },
      {
        "id": 581,
        "name": "سوران",
        "slug": "سوران",
        "province_id": 16
      },
      {
        "id": 582,
        "name": "سیرکان",
        "slug": "سیرکان",
        "province_id": 16
      },
      {
        "id": 583,
        "name": "علی اکبر",
        "slug": "علی-اکبر",
        "province_id": 16
      },
      {
        "id": 584,
        "name": "فنوج",
        "slug": "فنوج",
        "province_id": 16
      },
      {
        "id": 585,
        "name": "قصرقند",
        "slug": "قصرقند",
        "province_id": 16
      },
      {
        "id": 586,
        "name": "کنارک",
        "slug": "کنارک",
        "province_id": 16
      },
      {
        "id": 587,
        "name": "گشت",
        "slug": "گشت",
        "province_id": 16
      },
      {
        "id": 588,
        "name": "گلمورتی",
        "slug": "گلمورتی",
        "province_id": 16
      },
      {
        "id": 589,
        "name": "محمدان",
        "slug": "محمدان",
        "province_id": 16
      },
      {
        "id": 590,
        "name": "محمدآباد",
        "slug": "سیستان-و-بلوچستان-محمدآباد",
        "province_id": 16
      },
      {
        "id": 591,
        "name": "محمدی",
        "slug": "محمدی",
        "province_id": 16
      },
      {
        "id": 592,
        "name": "میرجاوه",
        "slug": "میرجاوه",
        "province_id": 16
      },
      {
        "id": 593,
        "name": "نصرت آباد",
        "slug": "نصرت-آباد",
        "province_id": 16
      },
      {
        "id": 594,
        "name": "نگور",
        "slug": "نگور",
        "province_id": 16
      },
      {
        "id": 595,
        "name": "نوک آباد",
        "slug": "نوک-آباد",
        "province_id": 16
      },
      {
        "id": 596,
        "name": "نیک شهر",
        "slug": "نیک-شهر",
        "province_id": 16
      },
      {
        "id": 597,
        "name": "هیدوچ",
        "slug": "هیدوچ",
        "province_id": 16
      },
      {
        "id": 598,
        "name": "اردکان",
        "slug": "فارس-اردکان",
        "province_id": 17
      },
      {
        "id": 599,
        "name": "ارسنجان",
        "slug": "ارسنجان",
        "province_id": 17
      },
      {
        "id": 600,
        "name": "استهبان",
        "slug": "استهبان",
        "province_id": 17
      },
      {
        "id": 601,
        "name": "اشکنان",
        "slug": "اشکنان",
        "province_id": 17
      },
      {
        "id": 602,
        "name": "افزر",
        "slug": "افزر",
        "province_id": 17
      },
      {
        "id": 603,
        "name": "اقلید",
        "slug": "اقلید",
        "province_id": 17
      },
      {
        "id": 604,
        "name": "امام شهر",
        "slug": "امام-شهر",
        "province_id": 17
      },
      {
        "id": 605,
        "name": "اهل",
        "slug": "اهل",
        "province_id": 17
      },
      {
        "id": 606,
        "name": "اوز",
        "slug": "اوز",
        "province_id": 17
      },
      {
        "id": 607,
        "name": "ایج",
        "slug": "ایج",
        "province_id": 17
      },
      {
        "id": 608,
        "name": "ایزدخواست",
        "slug": "ایزدخواست",
        "province_id": 17
      },
      {
        "id": 609,
        "name": "آباده",
        "slug": "آباده",
        "province_id": 17
      },
      {
        "id": 610,
        "name": "آباده طشک",
        "slug": "آباده-طشک",
        "province_id": 17
      },
      {
        "id": 611,
        "name": "باب انار",
        "slug": "باب-انار",
        "province_id": 17
      },
      {
        "id": 612,
        "name": "بالاده",
        "slug": "فارس-بالاده",
        "province_id": 17
      },
      {
        "id": 613,
        "name": "بنارویه",
        "slug": "بنارویه",
        "province_id": 17
      },
      {
        "id": 614,
        "name": "بهمن",
        "slug": "بهمن",
        "province_id": 17
      },
      {
        "id": 615,
        "name": "بوانات",
        "slug": "بوانات",
        "province_id": 17
      },
      {
        "id": 616,
        "name": "بیرم",
        "slug": "بیرم",
        "province_id": 17
      },
      {
        "id": 617,
        "name": "بیضا",
        "slug": "بیضا",
        "province_id": 17
      },
      {
        "id": 618,
        "name": "جنت شهر",
        "slug": "جنت-شهر",
        "province_id": 17
      },
      {
        "id": 619,
        "name": "جهرم",
        "slug": "جهرم",
        "province_id": 17
      },
      {
        "id": 620,
        "name": "جویم",
        "slug": "جویم",
        "province_id": 17
      },
      {
        "id": 621,
        "name": "زرین دشت",
        "slug": "زرین-دشت",
        "province_id": 17
      },
      {
        "id": 622,
        "name": "حسن آباد",
        "slug": "فارس-حسن-آباد",
        "province_id": 17
      },
      {
        "id": 623,
        "name": "خان زنیان",
        "slug": "خان-زنیان",
        "province_id": 17
      },
      {
        "id": 624,
        "name": "خاوران",
        "slug": "خاوران",
        "province_id": 17
      },
      {
        "id": 625,
        "name": "خرامه",
        "slug": "خرامه",
        "province_id": 17
      },
      {
        "id": 626,
        "name": "خشت",
        "slug": "خشت",
        "province_id": 17
      },
      {
        "id": 627,
        "name": "خنج",
        "slug": "خنج",
        "province_id": 17
      },
      {
        "id": 628,
        "name": "خور",
        "slug": "فارس-خور",
        "province_id": 17
      },
      {
        "id": 629,
        "name": "داراب",
        "slug": "داراب",
        "province_id": 17
      },
      {
        "id": 630,
        "name": "داریان",
        "slug": "داریان",
        "province_id": 17
      },
      {
        "id": 631,
        "name": "دبیران",
        "slug": "دبیران",
        "province_id": 17
      },
      {
        "id": 632,
        "name": "دژکرد",
        "slug": "دژکرد",
        "province_id": 17
      },
      {
        "id": 633,
        "name": "دهرم",
        "slug": "دهرم",
        "province_id": 17
      },
      {
        "id": 634,
        "name": "دوبرجی",
        "slug": "دوبرجی",
        "province_id": 17
      },
      {
        "id": 635,
        "name": "رامجرد",
        "slug": "رامجرد",
        "province_id": 17
      },
      {
        "id": 636,
        "name": "رونیز",
        "slug": "رونیز",
        "province_id": 17
      },
      {
        "id": 637,
        "name": "زاهدشهر",
        "slug": "زاهدشهر",
        "province_id": 17
      },
      {
        "id": 638,
        "name": "زرقان",
        "slug": "زرقان",
        "province_id": 17
      },
      {
        "id": 639,
        "name": "سده",
        "slug": "سده",
        "province_id": 17
      },
      {
        "id": 640,
        "name": "سروستان",
        "slug": "سروستان",
        "province_id": 17
      },
      {
        "id": 641,
        "name": "سعادت شهر",
        "slug": "سعادت-شهر",
        "province_id": 17
      },
      {
        "id": 642,
        "name": "سورمق",
        "slug": "سورمق",
        "province_id": 17
      },
      {
        "id": 643,
        "name": "سیدان",
        "slug": "سیدان",
        "province_id": 17
      },
      {
        "id": 644,
        "name": "ششده",
        "slug": "ششده",
        "province_id": 17
      },
      {
        "id": 645,
        "name": "شهرپیر",
        "slug": "شهرپیر",
        "province_id": 17
      },
      {
        "id": 646,
        "name": "شهرصدرا",
        "slug": "شهرصدرا",
        "province_id": 17
      },
      {
        "id": 647,
        "name": "شیراز",
        "slug": "شیراز",
        "province_id": 17
      },
      {
        "id": 648,
        "name": "صغاد",
        "slug": "صغاد",
        "province_id": 17
      },
      {
        "id": 649,
        "name": "صفاشهر",
        "slug": "صفاشهر",
        "province_id": 17
      },
      {
        "id": 650,
        "name": "علامرودشت",
        "slug": "علامرودشت",
        "province_id": 17
      },
      {
        "id": 651,
        "name": "فدامی",
        "slug": "فدامی",
        "province_id": 17
      },
      {
        "id": 652,
        "name": "فراشبند",
        "slug": "فراشبند",
        "province_id": 17
      },
      {
        "id": 653,
        "name": "فسا",
        "slug": "فسا",
        "province_id": 17
      },
      {
        "id": 654,
        "name": "فیروزآباد",
        "slug": "فارس-فیروزآباد",
        "province_id": 17
      },
      {
        "id": 655,
        "name": "قائمیه",
        "slug": "قائمیه",
        "province_id": 17
      },
      {
        "id": 656,
        "name": "قادرآباد",
        "slug": "قادرآباد",
        "province_id": 17
      },
      {
        "id": 657,
        "name": "قطب آباد",
        "slug": "قطب-آباد",
        "province_id": 17
      },
      {
        "id": 658,
        "name": "قطرویه",
        "slug": "قطرویه",
        "province_id": 17
      },
      {
        "id": 659,
        "name": "قیر",
        "slug": "قیر",
        "province_id": 17
      },
      {
        "id": 660,
        "name": "کارزین (فتح آباد)",
        "slug": "کارزین-فتح-آباد",
        "province_id": 17
      },
      {
        "id": 661,
        "name": "کازرون",
        "slug": "کازرون",
        "province_id": 17
      },
      {
        "id": 662,
        "name": "کامفیروز",
        "slug": "کامفیروز",
        "province_id": 17
      },
      {
        "id": 663,
        "name": "کره ای",
        "slug": "کره-ای",
        "province_id": 17
      },
      {
        "id": 664,
        "name": "کنارتخته",
        "slug": "کنارتخته",
        "province_id": 17
      },
      {
        "id": 665,
        "name": "کوار",
        "slug": "کوار",
        "province_id": 17
      },
      {
        "id": 666,
        "name": "گراش",
        "slug": "گراش",
        "province_id": 17
      },
      {
        "id": 667,
        "name": "گله دار",
        "slug": "گله-دار",
        "province_id": 17
      },
      {
        "id": 668,
        "name": "لار",
        "slug": "لار",
        "province_id": 17
      },
      {
        "id": 669,
        "name": "لامرد",
        "slug": "لامرد",
        "province_id": 17
      },
      {
        "id": 670,
        "name": "لپویی",
        "slug": "لپویی",
        "province_id": 17
      },
      {
        "id": 671,
        "name": "لطیفی",
        "slug": "لطیفی",
        "province_id": 17
      },
      {
        "id": 672,
        "name": "مبارک آباددیز",
        "slug": "مبارک-آباددیز",
        "province_id": 17
      },
      {
        "id": 673,
        "name": "مرودشت",
        "slug": "مرودشت",
        "province_id": 17
      },
      {
        "id": 674,
        "name": "مشکان",
        "slug": "مشکان",
        "province_id": 17
      },
      {
        "id": 675,
        "name": "مصیری",
        "slug": "مصیری",
        "province_id": 17
      },
      {
        "id": 676,
        "name": "مهر",
        "slug": "مهر",
        "province_id": 17
      },
      {
        "id": 677,
        "name": "میمند",
        "slug": "میمند",
        "province_id": 17
      },
      {
        "id": 678,
        "name": "نوبندگان",
        "slug": "نوبندگان",
        "province_id": 17
      },
      {
        "id": 679,
        "name": "نوجین",
        "slug": "نوجین",
        "province_id": 17
      },
      {
        "id": 680,
        "name": "نودان",
        "slug": "نودان",
        "province_id": 17
      },
      {
        "id": 681,
        "name": "نورآباد",
        "slug": "فارس-نورآباد",
        "province_id": 17
      },
      {
        "id": 682,
        "name": "نی ریز",
        "slug": "نی-ریز",
        "province_id": 17
      },
      {
        "id": 683,
        "name": "وراوی",
        "slug": "وراوی",
        "province_id": 17
      },
      {
        "id": 684,
        "name": "ارداق",
        "slug": "ارداق",
        "province_id": 18
      },
      {
        "id": 685,
        "name": "اسفرورین",
        "slug": "اسفرورین",
        "province_id": 18
      },
      {
        "id": 686,
        "name": "اقبالیه",
        "slug": "اقبالیه",
        "province_id": 18
      },
      {
        "id": 687,
        "name": "الوند",
        "slug": "الوند",
        "province_id": 18
      },
      {
        "id": 688,
        "name": "آبگرم",
        "slug": "آبگرم",
        "province_id": 18
      },
      {
        "id": 689,
        "name": "آبیک",
        "slug": "آبیک",
        "province_id": 18
      },
      {
        "id": 690,
        "name": "آوج",
        "slug": "آوج",
        "province_id": 18
      },
      {
        "id": 691,
        "name": "بوئین زهرا",
        "slug": "بوئین-زهرا",
        "province_id": 18
      },
      {
        "id": 692,
        "name": "بیدستان",
        "slug": "بیدستان",
        "province_id": 18
      },
      {
        "id": 693,
        "name": "تاکستان",
        "slug": "تاکستان",
        "province_id": 18
      },
      {
        "id": 694,
        "name": "خاکعلی",
        "slug": "خاکعلی",
        "province_id": 18
      },
      {
        "id": 695,
        "name": "خرمدشت",
        "slug": "خرمدشت",
        "province_id": 18
      },
      {
        "id": 696,
        "name": "دانسفهان",
        "slug": "دانسفهان",
        "province_id": 18
      },
      {
        "id": 697,
        "name": "رازمیان",
        "slug": "رازمیان",
        "province_id": 18
      },
      {
        "id": 698,
        "name": "سگزآباد",
        "slug": "سگزآباد",
        "province_id": 18
      },
      {
        "id": 699,
        "name": "سیردان",
        "slug": "سیردان",
        "province_id": 18
      },
      {
        "id": 700,
        "name": "شال",
        "slug": "شال",
        "province_id": 18
      },
      {
        "id": 701,
        "name": "شریفیه",
        "slug": "شریفیه",
        "province_id": 18
      },
      {
        "id": 702,
        "name": "ضیاآباد",
        "slug": "ضیاآباد",
        "province_id": 18
      },
      {
        "id": 703,
        "name": "قزوین",
        "slug": "شهر-قزوین",
        "province_id": 18
      },
      {
        "id": 704,
        "name": "کوهین",
        "slug": "کوهین",
        "province_id": 18
      },
      {
        "id": 705,
        "name": "محمدیه",
        "slug": "محمدیه",
        "province_id": 18
      },
      {
        "id": 706,
        "name": "محمودآباد نمونه",
        "slug": "محمودآباد-نمونه",
        "province_id": 18
      },
      {
        "id": 707,
        "name": "معلم کلایه",
        "slug": "معلم-کلایه",
        "province_id": 18
      },
      {
        "id": 708,
        "name": "نرجه",
        "slug": "نرجه",
        "province_id": 18
      },
      {
        "id": 709,
        "name": "جعفریه",
        "slug": "جعفریه",
        "province_id": 19
      },
      {
        "id": 710,
        "name": "دستجرد",
        "slug": "دستجرد",
        "province_id": 19
      },
      {
        "id": 711,
        "name": "سلفچگان",
        "slug": "سلفچگان",
        "province_id": 19
      },
      {
        "id": 712,
        "name": "قم",
        "slug": "شهر-قم",
        "province_id": 19
      },
      {
        "id": 713,
        "name": "قنوات",
        "slug": "قنوات",
        "province_id": 19
      },
      {
        "id": 714,
        "name": "کهک",
        "slug": "کهک",
        "province_id": 19
      },
      {
        "id": 715,
        "name": "آرمرده",
        "slug": "آرمرده",
        "province_id": 20
      },
      {
        "id": 716,
        "name": "بابارشانی",
        "slug": "بابارشانی",
        "province_id": 20
      },
      {
        "id": 717,
        "name": "بانه",
        "slug": "بانه",
        "province_id": 20
      },
      {
        "id": 718,
        "name": "بلبان آباد",
        "slug": "بلبان-آباد",
        "province_id": 20
      },
      {
        "id": 719,
        "name": "بوئین سفلی",
        "slug": "بوئین-سفلی",
        "province_id": 20
      },
      {
        "id": 720,
        "name": "بیجار",
        "slug": "بیجار",
        "province_id": 20
      },
      {
        "id": 721,
        "name": "چناره",
        "slug": "چناره",
        "province_id": 20
      },
      {
        "id": 722,
        "name": "دزج",
        "slug": "دزج",
        "province_id": 20
      },
      {
        "id": 723,
        "name": "دلبران",
        "slug": "دلبران",
        "province_id": 20
      },
      {
        "id": 724,
        "name": "دهگلان",
        "slug": "دهگلان",
        "province_id": 20
      },
      {
        "id": 725,
        "name": "دیواندره",
        "slug": "دیواندره",
        "province_id": 20
      },
      {
        "id": 726,
        "name": "زرینه",
        "slug": "زرینه",
        "province_id": 20
      },
      {
        "id": 727,
        "name": "سروآباد",
        "slug": "سروآباد",
        "province_id": 20
      },
      {
        "id": 728,
        "name": "سریش آباد",
        "slug": "سریش-آباد",
        "province_id": 20
      },
      {
        "id": 729,
        "name": "سقز",
        "slug": "سقز",
        "province_id": 20
      },
      {
        "id": 730,
        "name": "سنندج",
        "slug": "سنندج",
        "province_id": 20
      },
      {
        "id": 731,
        "name": "شویشه",
        "slug": "شویشه",
        "province_id": 20
      },
      {
        "id": 732,
        "name": "صاحب",
        "slug": "صاحب",
        "province_id": 20
      },
      {
        "id": 733,
        "name": "قروه",
        "slug": "قروه",
        "province_id": 20
      },
      {
        "id": 734,
        "name": "کامیاران",
        "slug": "کامیاران",
        "province_id": 20
      },
      {
        "id": 735,
        "name": "کانی دینار",
        "slug": "کانی-دینار",
        "province_id": 20
      },
      {
        "id": 736,
        "name": "کانی سور",
        "slug": "کانی-سور",
        "province_id": 20
      },
      {
        "id": 737,
        "name": "مریوان",
        "slug": "مریوان",
        "province_id": 20
      },
      {
        "id": 738,
        "name": "موچش",
        "slug": "موچش",
        "province_id": 20
      },
      {
        "id": 739,
        "name": "یاسوکند",
        "slug": "یاسوکند",
        "province_id": 20
      },
      {
        "id": 740,
        "name": "اختیارآباد",
        "slug": "اختیارآباد",
        "province_id": 21
      },
      {
        "id": 741,
        "name": "ارزوئیه",
        "slug": "ارزوئیه",
        "province_id": 21
      },
      {
        "id": 742,
        "name": "امین شهر",
        "slug": "امین-شهر",
        "province_id": 21
      },
      {
        "id": 743,
        "name": "انار",
        "slug": "انار",
        "province_id": 21
      },
      {
        "id": 744,
        "name": "اندوهجرد",
        "slug": "اندوهجرد",
        "province_id": 21
      },
      {
        "id": 745,
        "name": "باغین",
        "slug": "باغین",
        "province_id": 21
      },
      {
        "id": 746,
        "name": "بافت",
        "slug": "بافت",
        "province_id": 21
      },
      {
        "id": 747,
        "name": "بردسیر",
        "slug": "بردسیر",
        "province_id": 21
      },
      {
        "id": 748,
        "name": "بروات",
        "slug": "بروات",
        "province_id": 21
      },
      {
        "id": 749,
        "name": "بزنجان",
        "slug": "بزنجان",
        "province_id": 21
      },
      {
        "id": 750,
        "name": "بم",
        "slug": "بم",
        "province_id": 21
      },
      {
        "id": 751,
        "name": "بهرمان",
        "slug": "بهرمان",
        "province_id": 21
      },
      {
        "id": 752,
        "name": "پاریز",
        "slug": "پاریز",
        "province_id": 21
      },
      {
        "id": 753,
        "name": "جبالبارز",
        "slug": "جبالبارز",
        "province_id": 21
      },
      {
        "id": 754,
        "name": "جوپار",
        "slug": "جوپار",
        "province_id": 21
      },
      {
        "id": 755,
        "name": "جوزم",
        "slug": "جوزم",
        "province_id": 21
      },
      {
        "id": 756,
        "name": "جیرفت",
        "slug": "جیرفت",
        "province_id": 21
      },
      {
        "id": 757,
        "name": "چترود",
        "slug": "چترود",
        "province_id": 21
      },
      {
        "id": 758,
        "name": "خاتون آباد",
        "slug": "خاتون-آباد",
        "province_id": 21
      },
      {
        "id": 759,
        "name": "خانوک",
        "slug": "خانوک",
        "province_id": 21
      },
      {
        "id": 760,
        "name": "خورسند",
        "slug": "خورسند",
        "province_id": 21
      },
      {
        "id": 761,
        "name": "درب بهشت",
        "slug": "درب-بهشت",
        "province_id": 21
      },
      {
        "id": 762,
        "name": "دهج",
        "slug": "دهج",
        "province_id": 21
      },
      {
        "id": 763,
        "name": "رابر",
        "slug": "رابر",
        "province_id": 21
      },
      {
        "id": 764,
        "name": "راور",
        "slug": "راور",
        "province_id": 21
      },
      {
        "id": 765,
        "name": "راین",
        "slug": "راین",
        "province_id": 21
      },
      {
        "id": 766,
        "name": "رفسنجان",
        "slug": "رفسنجان",
        "province_id": 21
      },
      {
        "id": 767,
        "name": "رودبار",
        "slug": "کرمان-رودبار",
        "province_id": 21
      },
      {
        "id": 768,
        "name": "ریحان شهر",
        "slug": "ریحان-شهر",
        "province_id": 21
      },
      {
        "id": 769,
        "name": "زرند",
        "slug": "زرند",
        "province_id": 21
      },
      {
        "id": 770,
        "name": "زنگی آباد",
        "slug": "زنگی-آباد",
        "province_id": 21
      },
      {
        "id": 771,
        "name": "زیدآباد",
        "slug": "زیدآباد",
        "province_id": 21
      },
      {
        "id": 772,
        "name": "سیرجان",
        "slug": "سیرجان",
        "province_id": 21
      },
      {
        "id": 773,
        "name": "شهداد",
        "slug": "شهداد",
        "province_id": 21
      },
      {
        "id": 774,
        "name": "شهربابک",
        "slug": "شهربابک",
        "province_id": 21
      },
      {
        "id": 775,
        "name": "صفائیه",
        "slug": "صفائیه",
        "province_id": 21
      },
      {
        "id": 776,
        "name": "عنبرآباد",
        "slug": "عنبرآباد",
        "province_id": 21
      },
      {
        "id": 777,
        "name": "فاریاب",
        "slug": "فاریاب",
        "province_id": 21
      },
      {
        "id": 778,
        "name": "فهرج",
        "slug": "فهرج",
        "province_id": 21
      },
      {
        "id": 779,
        "name": "قلعه گنج",
        "slug": "قلعه-گنج",
        "province_id": 21
      },
      {
        "id": 780,
        "name": "کاظم آباد",
        "slug": "کاظم-آباد",
        "province_id": 21
      },
      {
        "id": 781,
        "name": "کرمان",
        "slug": "شهر-کرمان",
        "province_id": 21
      },
      {
        "id": 782,
        "name": "کشکوئیه",
        "slug": "کشکوئیه",
        "province_id": 21
      },
      {
        "id": 783,
        "name": "کهنوج",
        "slug": "کهنوج",
        "province_id": 21
      },
      {
        "id": 784,
        "name": "کوهبنان",
        "slug": "کوهبنان",
        "province_id": 21
      },
      {
        "id": 785,
        "name": "کیانشهر",
        "slug": "کیانشهر",
        "province_id": 21
      },
      {
        "id": 786,
        "name": "گلباف",
        "slug": "گلباف",
        "province_id": 21
      },
      {
        "id": 787,
        "name": "گلزار",
        "slug": "گلزار",
        "province_id": 21
      },
      {
        "id": 788,
        "name": "لاله زار",
        "slug": "لاله-زار",
        "province_id": 21
      },
      {
        "id": 789,
        "name": "ماهان",
        "slug": "ماهان",
        "province_id": 21
      },
      {
        "id": 790,
        "name": "محمدآباد",
        "slug": "کرمان-محمدآباد",
        "province_id": 21
      },
      {
        "id": 791,
        "name": "محی آباد",
        "slug": "محی-آباد",
        "province_id": 21
      },
      {
        "id": 792,
        "name": "مردهک",
        "slug": "مردهک",
        "province_id": 21
      },
      {
        "id": 793,
        "name": "مس سرچشمه",
        "slug": "مس-سرچشمه",
        "province_id": 21
      },
      {
        "id": 794,
        "name": "منوجان",
        "slug": "منوجان",
        "province_id": 21
      },
      {
        "id": 795,
        "name": "نجف شهر",
        "slug": "نجف-شهر",
        "province_id": 21
      },
      {
        "id": 796,
        "name": "نرماشیر",
        "slug": "نرماشیر",
        "province_id": 21
      },
      {
        "id": 797,
        "name": "نظام شهر",
        "slug": "نظام-شهر",
        "province_id": 21
      },
      {
        "id": 798,
        "name": "نگار",
        "slug": "نگار",
        "province_id": 21
      },
      {
        "id": 799,
        "name": "نودژ",
        "slug": "نودژ",
        "province_id": 21
      },
      {
        "id": 800,
        "name": "هجدک",
        "slug": "هجدک",
        "province_id": 21
      },
      {
        "id": 801,
        "name": "یزدان شهر",
        "slug": "یزدان-شهر",
        "province_id": 21
      },
      {
        "id": 802,
        "name": "ازگله",
        "slug": "ازگله",
        "province_id": 22
      },
      {
        "id": 803,
        "name": "اسلام آباد غرب",
        "slug": "اسلام-آباد-غرب",
        "province_id": 22
      },
      {
        "id": 804,
        "name": "باینگان",
        "slug": "باینگان",
        "province_id": 22
      },
      {
        "id": 805,
        "name": "بیستون",
        "slug": "بیستون",
        "province_id": 22
      },
      {
        "id": 806,
        "name": "پاوه",
        "slug": "پاوه",
        "province_id": 22
      },
      {
        "id": 807,
        "name": "تازه آباد",
        "slug": "تازه-آباد",
        "province_id": 22
      },
      {
        "id": 808,
        "name": "جوان رود",
        "slug": "جوان-رود",
        "province_id": 22
      },
      {
        "id": 809,
        "name": "حمیل",
        "slug": "حمیل",
        "province_id": 22
      },
      {
        "id": 810,
        "name": "ماهیدشت",
        "slug": "ماهیدشت",
        "province_id": 22
      },
      {
        "id": 811,
        "name": "روانسر",
        "slug": "روانسر",
        "province_id": 22
      },
      {
        "id": 812,
        "name": "سرپل ذهاب",
        "slug": "سرپل-ذهاب",
        "province_id": 22
      },
      {
        "id": 813,
        "name": "سرمست",
        "slug": "سرمست",
        "province_id": 22
      },
      {
        "id": 814,
        "name": "سطر",
        "slug": "سطر",
        "province_id": 22
      },
      {
        "id": 815,
        "name": "سنقر",
        "slug": "سنقر",
        "province_id": 22
      },
      {
        "id": 816,
        "name": "سومار",
        "slug": "سومار",
        "province_id": 22
      },
      {
        "id": 817,
        "name": "شاهو",
        "slug": "شاهو",
        "province_id": 22
      },
      {
        "id": 818,
        "name": "صحنه",
        "slug": "صحنه",
        "province_id": 22
      },
      {
        "id": 819,
        "name": "قصرشیرین",
        "slug": "قصرشیرین",
        "province_id": 22
      },
      {
        "id": 820,
        "name": "کرمانشاه",
        "slug": "شهر-کرمانشاه",
        "province_id": 22
      },
      {
        "id": 821,
        "name": "کرندغرب",
        "slug": "کرندغرب",
        "province_id": 22
      },
      {
        "id": 822,
        "name": "کنگاور",
        "slug": "کنگاور",
        "province_id": 22
      },
      {
        "id": 823,
        "name": "کوزران",
        "slug": "کوزران",
        "province_id": 22
      },
      {
        "id": 824,
        "name": "گهواره",
        "slug": "گهواره",
        "province_id": 22
      },
      {
        "id": 825,
        "name": "گیلانغرب",
        "slug": "گیلانغرب",
        "province_id": 22
      },
      {
        "id": 826,
        "name": "میان راهان",
        "slug": "میان-راهان",
        "province_id": 22
      },
      {
        "id": 827,
        "name": "نودشه",
        "slug": "نودشه",
        "province_id": 22
      },
      {
        "id": 828,
        "name": "نوسود",
        "slug": "نوسود",
        "province_id": 22
      },
      {
        "id": 829,
        "name": "هرسین",
        "slug": "هرسین",
        "province_id": 22
      },
      {
        "id": 830,
        "name": "هلشی",
        "slug": "هلشی",
        "province_id": 22
      },
      {
        "id": 831,
        "name": "باشت",
        "slug": "باشت",
        "province_id": 23
      },
      {
        "id": 832,
        "name": "پاتاوه",
        "slug": "پاتاوه",
        "province_id": 23
      },
      {
        "id": 833,
        "name": "چرام",
        "slug": "چرام",
        "province_id": 23
      },
      {
        "id": 834,
        "name": "چیتاب",
        "slug": "چیتاب",
        "province_id": 23
      },
      {
        "id": 835,
        "name": "دهدشت",
        "slug": "دهدشت",
        "province_id": 23
      },
      {
        "id": 836,
        "name": "دوگنبدان",
        "slug": "دوگنبدان",
        "province_id": 23
      },
      {
        "id": 837,
        "name": "دیشموک",
        "slug": "دیشموک",
        "province_id": 23
      },
      {
        "id": 838,
        "name": "سوق",
        "slug": "سوق",
        "province_id": 23
      },
      {
        "id": 839,
        "name": "سی سخت",
        "slug": "سی-سخت",
        "province_id": 23
      },
      {
        "id": 840,
        "name": "قلعه رئیسی",
        "slug": "قلعه-رئیسی",
        "province_id": 23
      },
      {
        "id": 841,
        "name": "گراب سفلی",
        "slug": "گراب-سفلی",
        "province_id": 23
      },
      {
        "id": 842,
        "name": "لنده",
        "slug": "لنده",
        "province_id": 23
      },
      {
        "id": 843,
        "name": "لیکک",
        "slug": "لیکک",
        "province_id": 23
      },
      {
        "id": 844,
        "name": "مادوان",
        "slug": "مادوان",
        "province_id": 23
      },
      {
        "id": 845,
        "name": "مارگون",
        "slug": "مارگون",
        "province_id": 23
      },
      {
        "id": 846,
        "name": "یاسوج",
        "slug": "یاسوج",
        "province_id": 23
      },
      {
        "id": 847,
        "name": "انبارآلوم",
        "slug": "انبارآلوم",
        "province_id": 24
      },
      {
        "id": 848,
        "name": "اینچه برون",
        "slug": "اینچه-برون",
        "province_id": 24
      },
      {
        "id": 849,
        "name": "آزادشهر",
        "slug": "آزادشهر",
        "province_id": 24
      },
      {
        "id": 850,
        "name": "آق قلا",
        "slug": "آق-قلا",
        "province_id": 24
      },
      {
        "id": 851,
        "name": "بندرترکمن",
        "slug": "بندرترکمن",
        "province_id": 24
      },
      {
        "id": 852,
        "name": "بندرگز",
        "slug": "بندرگز",
        "province_id": 24
      },
      {
        "id": 853,
        "name": "جلین",
        "slug": "جلین",
        "province_id": 24
      },
      {
        "id": 854,
        "name": "خان ببین",
        "slug": "خان-ببین",
        "province_id": 24
      },
      {
        "id": 855,
        "name": "دلند",
        "slug": "دلند",
        "province_id": 24
      },
      {
        "id": 856,
        "name": "رامیان",
        "slug": "رامیان",
        "province_id": 24
      },
      {
        "id": 857,
        "name": "سرخنکلاته",
        "slug": "سرخنکلاته",
        "province_id": 24
      },
      {
        "id": 858,
        "name": "سیمین شهر",
        "slug": "سیمین-شهر",
        "province_id": 24
      },
      {
        "id": 859,
        "name": "علی آباد کتول",
        "slug": "علی-آباد-کتول",
        "province_id": 24
      },
      {
        "id": 860,
        "name": "فاضل آباد",
        "slug": "فاضل-آباد",
        "province_id": 24
      },
      {
        "id": 861,
        "name": "کردکوی",
        "slug": "کردکوی",
        "province_id": 24
      },
      {
        "id": 862,
        "name": "کلاله",
        "slug": "کلاله",
        "province_id": 24
      },
      {
        "id": 863,
        "name": "گالیکش",
        "slug": "گالیکش",
        "province_id": 24
      },
      {
        "id": 864,
        "name": "گرگان",
        "slug": "گرگان",
        "province_id": 24
      },
      {
        "id": 865,
        "name": "گمیش تپه",
        "slug": "گمیش-تپه",
        "province_id": 24
      },
      {
        "id": 866,
        "name": "گنبدکاووس",
        "slug": "گنبدکاووس",
        "province_id": 24
      },
      {
        "id": 867,
        "name": "مراوه",
        "slug": "مراوه",
        "province_id": 24
      },
      {
        "id": 868,
        "name": "مینودشت",
        "slug": "مینودشت",
        "province_id": 24
      },
      {
        "id": 869,
        "name": "نگین شهر",
        "slug": "نگین-شهر",
        "province_id": 24
      },
      {
        "id": 870,
        "name": "نوده خاندوز",
        "slug": "نوده-خاندوز",
        "province_id": 24
      },
      {
        "id": 871,
        "name": "نوکنده",
        "slug": "نوکنده",
        "province_id": 24
      },
      {
        "id": 872,
        "name": "ازنا",
        "slug": "ازنا",
        "province_id": 25
      },
      {
        "id": 873,
        "name": "اشترینان",
        "slug": "اشترینان",
        "province_id": 25
      },
      {
        "id": 874,
        "name": "الشتر",
        "slug": "الشتر",
        "province_id": 25
      },
      {
        "id": 875,
        "name": "الیگودرز",
        "slug": "الیگودرز",
        "province_id": 25
      },
      {
        "id": 876,
        "name": "بروجرد",
        "slug": "بروجرد",
        "province_id": 25
      },
      {
        "id": 877,
        "name": "پلدختر",
        "slug": "پلدختر",
        "province_id": 25
      },
      {
        "id": 878,
        "name": "چالانچولان",
        "slug": "چالانچولان",
        "province_id": 25
      },
      {
        "id": 879,
        "name": "چغلوندی",
        "slug": "چغلوندی",
        "province_id": 25
      },
      {
        "id": 880,
        "name": "چقابل",
        "slug": "چقابل",
        "province_id": 25
      },
      {
        "id": 881,
        "name": "خرم آباد",
        "slug": "لرستان-خرم-آباد",
        "province_id": 25
      },
      {
        "id": 882,
        "name": "درب گنبد",
        "slug": "درب-گنبد",
        "province_id": 25
      },
      {
        "id": 883,
        "name": "دورود",
        "slug": "دورود",
        "province_id": 25
      },
      {
        "id": 884,
        "name": "زاغه",
        "slug": "زاغه",
        "province_id": 25
      },
      {
        "id": 885,
        "name": "سپیددشت",
        "slug": "سپیددشت",
        "province_id": 25
      },
      {
        "id": 886,
        "name": "سراب دوره",
        "slug": "سراب-دوره",
        "province_id": 25
      },
      {
        "id": 887,
        "name": "فیروزآباد",
        "slug": "لرستان-فیروزآباد",
        "province_id": 25
      },
      {
        "id": 888,
        "name": "کونانی",
        "slug": "کونانی",
        "province_id": 25
      },
      {
        "id": 889,
        "name": "کوهدشت",
        "slug": "کوهدشت",
        "province_id": 25
      },
      {
        "id": 890,
        "name": "گراب",
        "slug": "گراب",
        "province_id": 25
      },
      {
        "id": 891,
        "name": "معمولان",
        "slug": "معمولان",
        "province_id": 25
      },
      {
        "id": 892,
        "name": "مومن آباد",
        "slug": "مومن-آباد",
        "province_id": 25
      },
      {
        "id": 893,
        "name": "نورآباد",
        "slug": "لرستان-نورآباد",
        "province_id": 25
      },
      {
        "id": 894,
        "name": "ویسیان",
        "slug": "ویسیان",
        "province_id": 25
      },
      {
        "id": 895,
        "name": "احمدسرگوراب",
        "slug": "احمدسرگوراب",
        "province_id": 26
      },
      {
        "id": 896,
        "name": "اسالم",
        "slug": "اسالم",
        "province_id": 26
      },
      {
        "id": 897,
        "name": "اطاقور",
        "slug": "اطاقور",
        "province_id": 26
      },
      {
        "id": 898,
        "name": "املش",
        "slug": "املش",
        "province_id": 26
      },
      {
        "id": 899,
        "name": "آستارا",
        "slug": "آستارا",
        "province_id": 26
      },
      {
        "id": 900,
        "name": "آستانه اشرفیه",
        "slug": "آستانه-اشرفیه",
        "province_id": 26
      },
      {
        "id": 901,
        "name": "بازار جمعه",
        "slug": "بازار-جمعه",
        "province_id": 26
      },
      {
        "id": 902,
        "name": "بره سر",
        "slug": "بره-سر",
        "province_id": 26
      },
      {
        "id": 903,
        "name": "بندرانزلی",
        "slug": "بندرانزلی",
        "province_id": 26
      },
      {
        "id": 906,
        "name": "پره سر",
        "slug": "پره-سر",
        "province_id": 26
      },
      {
        "id": 907,
        "name": "تالش",
        "slug": "تالش",
        "province_id": 26
      },
      {
        "id": 908,
        "name": "توتکابن",
        "slug": "توتکابن",
        "province_id": 26
      },
      {
        "id": 909,
        "name": "جیرنده",
        "slug": "جیرنده",
        "province_id": 26
      },
      {
        "id": 910,
        "name": "چابکسر",
        "slug": "چابکسر",
        "province_id": 26
      },
      {
        "id": 911,
        "name": "چاف و چمخاله",
        "slug": "چاف-و-چمخاله",
        "province_id": 26
      },
      {
        "id": 912,
        "name": "چوبر",
        "slug": "چوبر",
        "province_id": 26
      },
      {
        "id": 913,
        "name": "حویق",
        "slug": "حویق",
        "province_id": 26
      },
      {
        "id": 914,
        "name": "خشکبیجار",
        "slug": "خشکبیجار",
        "province_id": 26
      },
      {
        "id": 915,
        "name": "خمام",
        "slug": "خمام",
        "province_id": 26
      },
      {
        "id": 916,
        "name": "دیلمان",
        "slug": "دیلمان",
        "province_id": 26
      },
      {
        "id": 917,
        "name": "رانکوه",
        "slug": "رانکوه",
        "province_id": 26
      },
      {
        "id": 918,
        "name": "رحیم آباد",
        "slug": "رحیم-آباد",
        "province_id": 26
      },
      {
        "id": 919,
        "name": "رستم آباد",
        "slug": "رستم-آباد",
        "province_id": 26
      },
      {
        "id": 920,
        "name": "رشت",
        "slug": "رشت",
        "province_id": 26
      },
      {
        "id": 921,
        "name": "رضوانشهر",
        "slug": "گیلان-رضوانشهر",
        "province_id": 26
      },
      {
        "id": 922,
        "name": "رودبار",
        "slug": "گیلان-رودبار",
        "province_id": 26
      },
      {
        "id": 923,
        "name": "رودبنه",
        "slug": "رودبنه",
        "province_id": 26
      },
      {
        "id": 924,
        "name": "رودسر",
        "slug": "رودسر",
        "province_id": 26
      },
      {
        "id": 925,
        "name": "سنگر",
        "slug": "سنگر",
        "province_id": 26
      },
      {
        "id": 926,
        "name": "سیاهکل",
        "slug": "سیاهکل",
        "province_id": 26
      },
      {
        "id": 927,
        "name": "شفت",
        "slug": "شفت",
        "province_id": 26
      },
      {
        "id": 928,
        "name": "شلمان",
        "slug": "شلمان",
        "province_id": 26
      },
      {
        "id": 929,
        "name": "صومعه سرا",
        "slug": "صومعه-سرا",
        "province_id": 26
      },
      {
        "id": 930,
        "name": "فومن",
        "slug": "فومن",
        "province_id": 26
      },
      {
        "id": 931,
        "name": "کلاچای",
        "slug": "کلاچای",
        "province_id": 26
      },
      {
        "id": 932,
        "name": "کوچصفهان",
        "slug": "کوچصفهان",
        "province_id": 26
      },
      {
        "id": 933,
        "name": "کومله",
        "slug": "کومله",
        "province_id": 26
      },
      {
        "id": 934,
        "name": "کیاشهر",
        "slug": "کیاشهر",
        "province_id": 26
      },
      {
        "id": 935,
        "name": "گوراب زرمیخ",
        "slug": "گوراب-زرمیخ",
        "province_id": 26
      },
      {
        "id": 936,
        "name": "لاهیجان",
        "slug": "لاهیجان",
        "province_id": 26
      },
      {
        "id": 937,
        "name": "لشت نشا",
        "slug": "لشت-نشا",
        "province_id": 26
      },
      {
        "id": 938,
        "name": "لنگرود",
        "slug": "لنگرود",
        "province_id": 26
      },
      {
        "id": 939,
        "name": "لوشان",
        "slug": "لوشان",
        "province_id": 26
      },
      {
        "id": 940,
        "name": "لولمان",
        "slug": "لولمان",
        "province_id": 26
      },
      {
        "id": 941,
        "name": "لوندویل",
        "slug": "لوندویل",
        "province_id": 26
      },
      {
        "id": 942,
        "name": "لیسار",
        "slug": "لیسار",
        "province_id": 26
      },
      {
        "id": 943,
        "name": "ماسال",
        "slug": "ماسال",
        "province_id": 26
      },
      {
        "id": 944,
        "name": "ماسوله",
        "slug": "ماسوله",
        "province_id": 26
      },
      {
        "id": 945,
        "name": "مرجقل",
        "slug": "مرجقل",
        "province_id": 26
      },
      {
        "id": 946,
        "name": "منجیل",
        "slug": "منجیل",
        "province_id": 26
      },
      {
        "id": 947,
        "name": "واجارگاه",
        "slug": "واجارگاه",
        "province_id": 26
      },
      {
        "id": 948,
        "name": "امیرکلا",
        "slug": "امیرکلا",
        "province_id": 27
      },
      {
        "id": 949,
        "name": "ایزدشهر",
        "slug": "ایزدشهر",
        "province_id": 27
      },
      {
        "id": 950,
        "name": "آلاشت",
        "slug": "آلاشت",
        "province_id": 27
      },
      {
        "id": 951,
        "name": "آمل",
        "slug": "آمل",
        "province_id": 27
      },
      {
        "id": 952,
        "name": "بابل",
        "slug": "بابل",
        "province_id": 27
      },
      {
        "id": 953,
        "name": "بابلسر",
        "slug": "بابلسر",
        "province_id": 27
      },
      {
        "id": 954,
        "name": "بالاده",
        "slug": "مازندران-بالاده",
        "province_id": 27
      },
      {
        "id": 955,
        "name": "بهشهر",
        "slug": "بهشهر",
        "province_id": 27
      },
      {
        "id": 956,
        "name": "بهنمیر",
        "slug": "بهنمیر",
        "province_id": 27
      },
      {
        "id": 957,
        "name": "پل سفید",
        "slug": "پل-سفید",
        "province_id": 27
      },
      {
        "id": 958,
        "name": "تنکابن",
        "slug": "تنکابن",
        "province_id": 27
      },
      {
        "id": 959,
        "name": "جویبار",
        "slug": "جویبار",
        "province_id": 27
      },
      {
        "id": 960,
        "name": "چالوس",
        "slug": "چالوس",
        "province_id": 27
      },
      {
        "id": 961,
        "name": "چمستان",
        "slug": "چمستان",
        "province_id": 27
      },
      {
        "id": 962,
        "name": "خرم آباد",
        "slug": "مازندران-خرم-آباد",
        "province_id": 27
      },
      {
        "id": 963,
        "name": "خلیل شهر",
        "slug": "خلیل-شهر",
        "province_id": 27
      },
      {
        "id": 964,
        "name": "خوش رودپی",
        "slug": "خوش-رودپی",
        "province_id": 27
      },
      {
        "id": 965,
        "name": "دابودشت",
        "slug": "دابودشت",
        "province_id": 27
      },
      {
        "id": 966,
        "name": "رامسر",
        "slug": "رامسر",
        "province_id": 27
      },
      {
        "id": 967,
        "name": "رستمکلا",
        "slug": "رستمکلا",
        "province_id": 27
      },
      {
        "id": 968,
        "name": "رویان",
        "slug": "رویان",
        "province_id": 27
      },
      {
        "id": 969,
        "name": "رینه",
        "slug": "رینه",
        "province_id": 27
      },
      {
        "id": 970,
        "name": "زرگرمحله",
        "slug": "زرگرمحله",
        "province_id": 27
      },
      {
        "id": 971,
        "name": "زیرآب",
        "slug": "زیرآب",
        "province_id": 27
      },
      {
        "id": 972,
        "name": "ساری",
        "slug": "ساری",
        "province_id": 27
      },
      {
        "id": 973,
        "name": "سرخرود",
        "slug": "سرخرود",
        "province_id": 27
      },
      {
        "id": 974,
        "name": "سلمان شهر",
        "slug": "سلمان-شهر",
        "province_id": 27
      },
      {
        "id": 975,
        "name": "سورک",
        "slug": "سورک",
        "province_id": 27
      },
      {
        "id": 976,
        "name": "شیرگاه",
        "slug": "شیرگاه",
        "province_id": 27
      },
      {
        "id": 977,
        "name": "شیرود",
        "slug": "شیرود",
        "province_id": 27
      },
      {
        "id": 978,
        "name": "عباس آباد",
        "slug": "عباس-آباد",
        "province_id": 27
      },
      {
        "id": 979,
        "name": "فریدونکنار",
        "slug": "فریدونکنار",
        "province_id": 27
      },
      {
        "id": 980,
        "name": "فریم",
        "slug": "فریم",
        "province_id": 27
      },
      {
        "id": 981,
        "name": "قائم شهر",
        "slug": "قائم-شهر",
        "province_id": 27
      },
      {
        "id": 982,
        "name": "کتالم",
        "slug": "کتالم",
        "province_id": 27
      },
      {
        "id": 983,
        "name": "کلارآباد",
        "slug": "کلارآباد",
        "province_id": 27
      },
      {
        "id": 984,
        "name": "کلاردشت",
        "slug": "کلاردشت",
        "province_id": 27
      },
      {
        "id": 985,
        "name": "کله بست",
        "slug": "کله-بست",
        "province_id": 27
      },
      {
        "id": 986,
        "name": "کوهی خیل",
        "slug": "کوهی-خیل",
        "province_id": 27
      },
      {
        "id": 987,
        "name": "کیاسر",
        "slug": "کیاسر",
        "province_id": 27
      },
      {
        "id": 988,
        "name": "کیاکلا",
        "slug": "کیاکلا",
        "province_id": 27
      },
      {
        "id": 989,
        "name": "گتاب",
        "slug": "گتاب",
        "province_id": 27
      },
      {
        "id": 990,
        "name": "گزنک",
        "slug": "گزنک",
        "province_id": 27
      },
      {
        "id": 991,
        "name": "گلوگاه",
        "slug": "گلوگاه",
        "province_id": 27
      },
      {
        "id": 992,
        "name": "محمودآباد",
        "slug": "مازندران-محمودآباد",
        "province_id": 27
      },
      {
        "id": 993,
        "name": "مرزن آباد",
        "slug": "مرزن-آباد",
        "province_id": 27
      },
      {
        "id": 994,
        "name": "مرزیکلا",
        "slug": "مرزیکلا",
        "province_id": 27
      },
      {
        "id": 995,
        "name": "نشتارود",
        "slug": "نشتارود",
        "province_id": 27
      },
      {
        "id": 996,
        "name": "نکا",
        "slug": "نکا",
        "province_id": 27
      },
      {
        "id": 997,
        "name": "نور",
        "slug": "نور",
        "province_id": 27
      },
      {
        "id": 998,
        "name": "نوشهر",
        "slug": "نوشهر",
        "province_id": 27
      },
      {
        "id": 1119,
        "name": "سادات شهر",
        "slug": "سادات-شهر",
        "province_id": 27
      },
      {
        "id": 999,
        "name": "اراک",
        "slug": "اراک",
        "province_id": 28
      },
      {
        "id": 1000,
        "name": "آستانه",
        "slug": "آستانه",
        "province_id": 28
      },
      {
        "id": 1001,
        "name": "آشتیان",
        "slug": "آشتیان",
        "province_id": 28
      },
      {
        "id": 1002,
        "name": "پرندک",
        "slug": "پرندک",
        "province_id": 28
      },
      {
        "id": 1003,
        "name": "تفرش",
        "slug": "تفرش",
        "province_id": 28
      },
      {
        "id": 1004,
        "name": "توره",
        "slug": "توره",
        "province_id": 28
      },
      {
        "id": 1005,
        "name": "جاورسیان",
        "slug": "جاورسیان",
        "province_id": 28
      },
      {
        "id": 1006,
        "name": "خشکرود",
        "slug": "خشکرود",
        "province_id": 28
      },
      {
        "id": 1007,
        "name": "خمین",
        "slug": "خمین",
        "province_id": 28
      },
      {
        "id": 1008,
        "name": "خنداب",
        "slug": "خنداب",
        "province_id": 28
      },
      {
        "id": 1009,
        "name": "داودآباد",
        "slug": "داودآباد",
        "province_id": 28
      },
      {
        "id": 1010,
        "name": "دلیجان",
        "slug": "دلیجان",
        "province_id": 28
      },
      {
        "id": 1011,
        "name": "رازقان",
        "slug": "رازقان",
        "province_id": 28
      },
      {
        "id": 1012,
        "name": "زاویه",
        "slug": "زاویه",
        "province_id": 28
      },
      {
        "id": 1013,
        "name": "ساروق",
        "slug": "ساروق",
        "province_id": 28
      },
      {
        "id": 1014,
        "name": "ساوه",
        "slug": "ساوه",
        "province_id": 28
      },
      {
        "id": 1015,
        "name": "سنجان",
        "slug": "سنجان",
        "province_id": 28
      },
      {
        "id": 1016,
        "name": "شازند",
        "slug": "شازند",
        "province_id": 28
      },
      {
        "id": 1017,
        "name": "غرق آباد",
        "slug": "غرق-آباد",
        "province_id": 28
      },
      {
        "id": 1018,
        "name": "فرمهین",
        "slug": "فرمهین",
        "province_id": 28
      },
      {
        "id": 1019,
        "name": "قورچی باشی",
        "slug": "قورچی-باشی",
        "province_id": 28
      },
      {
        "id": 1020,
        "name": "کرهرود",
        "slug": "کرهرود",
        "province_id": 28
      },
      {
        "id": 1021,
        "name": "کمیجان",
        "slug": "کمیجان",
        "province_id": 28
      },
      {
        "id": 1022,
        "name": "مامونیه",
        "slug": "مامونیه",
        "province_id": 28
      },
      {
        "id": 1023,
        "name": "محلات",
        "slug": "محلات",
        "province_id": 28
      },
      {
        "id": 1024,
        "name": "مهاجران",
        "slug": "مهاجران",
        "province_id": 28
      },
      {
        "id": 1025,
        "name": "میلاجرد",
        "slug": "میلاجرد",
        "province_id": 28
      },
      {
        "id": 1026,
        "name": "نراق",
        "slug": "نراق",
        "province_id": 28
      },
      {
        "id": 1027,
        "name": "نوبران",
        "slug": "نوبران",
        "province_id": 28
      },
      {
        "id": 1028,
        "name": "نیمور",
        "slug": "نیمور",
        "province_id": 28
      },
      {
        "id": 1029,
        "name": "هندودر",
        "slug": "هندودر",
        "province_id": 28
      },
      {
        "id": 1030,
        "name": "ابوموسی",
        "slug": "ابوموسی",
        "province_id": 29
      },
      {
        "id": 1031,
        "name": "بستک",
        "slug": "بستک",
        "province_id": 29
      },
      {
        "id": 1032,
        "name": "بندرجاسک",
        "slug": "بندرجاسک",
        "province_id": 29
      },
      {
        "id": 1033,
        "name": "بندرچارک",
        "slug": "بندرچارک",
        "province_id": 29
      },
      {
        "id": 1034,
        "name": "بندرخمیر",
        "slug": "بندرخمیر",
        "province_id": 29
      },
      {
        "id": 1035,
        "name": "بندرعباس",
        "slug": "بندرعباس",
        "province_id": 29
      },
      {
        "id": 1036,
        "name": "بندرلنگه",
        "slug": "بندرلنگه",
        "province_id": 29
      },
      {
        "id": 1037,
        "name": "بیکا",
        "slug": "بیکا",
        "province_id": 29
      },
      {
        "id": 1038,
        "name": "پارسیان",
        "slug": "پارسیان",
        "province_id": 29
      },
      {
        "id": 1039,
        "name": "تخت",
        "slug": "تخت",
        "province_id": 29
      },
      {
        "id": 1040,
        "name": "جناح",
        "slug": "جناح",
        "province_id": 29
      },
      {
        "id": 1041,
        "name": "حاجی آباد",
        "slug": "هرمزگان-حاجی-آباد",
        "province_id": 29
      },
      {
        "id": 1042,
        "name": "درگهان",
        "slug": "درگهان",
        "province_id": 29
      },
      {
        "id": 1043,
        "name": "دهبارز",
        "slug": "دهبارز",
        "province_id": 29
      },
      {
        "id": 1044,
        "name": "رویدر",
        "slug": "رویدر",
        "province_id": 29
      },
      {
        "id": 1045,
        "name": "زیارتعلی",
        "slug": "زیارتعلی",
        "province_id": 29
      },
      {
        "id": 1046,
        "name": "سردشت",
        "slug": "هرمزگان-سردشت",
        "province_id": 29
      },
      {
        "id": 1047,
        "name": "سندرک",
        "slug": "سندرک",
        "province_id": 29
      },
      {
        "id": 1048,
        "name": "سوزا",
        "slug": "سوزا",
        "province_id": 29
      },
      {
        "id": 1049,
        "name": "سیریک",
        "slug": "سیریک",
        "province_id": 29
      },
      {
        "id": 1050,
        "name": "فارغان",
        "slug": "فارغان",
        "province_id": 29
      },
      {
        "id": 1051,
        "name": "فین",
        "slug": "فین",
        "province_id": 29
      },
      {
        "id": 1052,
        "name": "قشم",
        "slug": "قشم",
        "province_id": 29
      },
      {
        "id": 1053,
        "name": "قلعه قاضی",
        "slug": "قلعه-قاضی",
        "province_id": 29
      },
      {
        "id": 1054,
        "name": "کنگ",
        "slug": "کنگ",
        "province_id": 29
      },
      {
        "id": 1055,
        "name": "کوشکنار",
        "slug": "کوشکنار",
        "province_id": 29
      },
      {
        "id": 1056,
        "name": "کیش",
        "slug": "کیش",
        "province_id": 29
      },
      {
        "id": 1057,
        "name": "گوهران",
        "slug": "گوهران",
        "province_id": 29
      },
      {
        "id": 1058,
        "name": "میناب",
        "slug": "میناب",
        "province_id": 29
      },
      {
        "id": 1059,
        "name": "هرمز",
        "slug": "هرمز",
        "province_id": 29
      },
      {
        "id": 1060,
        "name": "هشتبندی",
        "slug": "هشتبندی",
        "province_id": 29
      },
      {
        "id": 1061,
        "name": "ازندریان",
        "slug": "ازندریان",
        "province_id": 30
      },
      {
        "id": 1062,
        "name": "اسدآباد",
        "slug": "اسدآباد",
        "province_id": 30
      },
      {
        "id": 1063,
        "name": "برزول",
        "slug": "برزول",
        "province_id": 30
      },
      {
        "id": 1064,
        "name": "بهار",
        "slug": "بهار",
        "province_id": 30
      },
      {
        "id": 1065,
        "name": "تویسرکان",
        "slug": "تویسرکان",
        "province_id": 30
      },
      {
        "id": 1066,
        "name": "جورقان",
        "slug": "جورقان",
        "province_id": 30
      },
      {
        "id": 1067,
        "name": "جوکار",
        "slug": "جوکار",
        "province_id": 30
      },
      {
        "id": 1068,
        "name": "دمق",
        "slug": "دمق",
        "province_id": 30
      },
      {
        "id": 1069,
        "name": "رزن",
        "slug": "رزن",
        "province_id": 30
      },
      {
        "id": 1070,
        "name": "زنگنه",
        "slug": "زنگنه",
        "province_id": 30
      },
      {
        "id": 1071,
        "name": "سامن",
        "slug": "سامن",
        "province_id": 30
      },
      {
        "id": 1072,
        "name": "سرکان",
        "slug": "سرکان",
        "province_id": 30
      },
      {
        "id": 1073,
        "name": "شیرین سو",
        "slug": "شیرین-سو",
        "province_id": 30
      },
      {
        "id": 1074,
        "name": "صالح آباد",
        "slug": "همدان-صالح-آباد",
        "province_id": 30
      },
      {
        "id": 1075,
        "name": "فامنین",
        "slug": "فامنین",
        "province_id": 30
      },
      {
        "id": 1076,
        "name": "فرسفج",
        "slug": "فرسفج",
        "province_id": 30
      },
      {
        "id": 1077,
        "name": "فیروزان",
        "slug": "فیروزان",
        "province_id": 30
      },
      {
        "id": 1078,
        "name": "قروه درجزین",
        "slug": "قروه-درجزین",
        "province_id": 30
      },
      {
        "id": 1079,
        "name": "قهاوند",
        "slug": "قهاوند",
        "province_id": 30
      },
      {
        "id": 1080,
        "name": "کبودر آهنگ",
        "slug": "کبودر-آهنگ",
        "province_id": 30
      },
      {
        "id": 1081,
        "name": "گل تپه",
        "slug": "گل-تپه",
        "province_id": 30
      },
      {
        "id": 1082,
        "name": "گیان",
        "slug": "گیان",
        "province_id": 30
      },
      {
        "id": 1083,
        "name": "لالجین",
        "slug": "لالجین",
        "province_id": 30
      },
      {
        "id": 1084,
        "name": "مریانج",
        "slug": "مریانج",
        "province_id": 30
      },
      {
        "id": 1085,
        "name": "ملایر",
        "slug": "ملایر",
        "province_id": 30
      },
      {
        "id": 1086,
        "name": "نهاوند",
        "slug": "نهاوند",
        "province_id": 30
      },
      {
        "id": 1087,
        "name": "همدان",
        "slug": "شهر-همدان",
        "province_id": 30
      },
      {
        "id": 1088,
        "name": "ابرکوه",
        "slug": "ابرکوه",
        "province_id": 31
      },
      {
        "id": 1089,
        "name": "احمدآباد",
        "slug": "احمدآباد",
        "province_id": 31
      },
      {
        "id": 1090,
        "name": "اردکان",
        "slug": "یزد-اردکان",
        "province_id": 31
      },
      {
        "id": 1091,
        "name": "اشکذر",
        "slug": "اشکذر",
        "province_id": 31
      },
      {
        "id": 1092,
        "name": "بافق",
        "slug": "بافق",
        "province_id": 31
      },
      {
        "id": 1093,
        "name": "بفروئیه",
        "slug": "بفروئیه",
        "province_id": 31
      },
      {
        "id": 1094,
        "name": "بهاباد",
        "slug": "بهاباد",
        "province_id": 31
      },
      {
        "id": 1095,
        "name": "تفت",
        "slug": "تفت",
        "province_id": 31
      },
      {
        "id": 1096,
        "name": "حمیدیا",
        "slug": "حمیدیا",
        "province_id": 31
      },
      {
        "id": 1097,
        "name": "خضرآباد",
        "slug": "خضرآباد",
        "province_id": 31
      },
      {
        "id": 1098,
        "name": "دیهوک",
        "slug": "دیهوک",
        "province_id": 31
      },
      {
        "id": 1099,
        "name": "زارچ",
        "slug": "زارچ",
        "province_id": 31
      },
      {
        "id": 1100,
        "name": "شاهدیه",
        "slug": "شاهدیه",
        "province_id": 31
      },
      {
        "id": 1101,
        "name": "طبس",
        "slug": "یزد-طبس",
        "province_id": 31
      },
      {
        "id": 1103,
        "name": "عقدا",
        "slug": "عقدا",
        "province_id": 31
      },
      {
        "id": 1104,
        "name": "مروست",
        "slug": "مروست",
        "province_id": 31
      },
      {
        "id": 1105,
        "name": "مهردشت",
        "slug": "مهردشت",
        "province_id": 31
      },
      {
        "id": 1106,
        "name": "مهریز",
        "slug": "مهریز",
        "province_id": 31
      },
      {
        "id": 1107,
        "name": "میبد",
        "slug": "میبد",
        "province_id": 31
      },
      {
        "id": 1108,
        "name": "ندوشن",
        "slug": "ندوشن",
        "province_id": 31
      },
      {
        "id": 1109,
        "name": "نیر",
        "slug": "یزد-نیر",
        "province_id": 31
      },
      {
        "id": 1110,
        "name": "هرات",
        "slug": "هرات",
        "province_id": 31
      },
      {
        "id": 1111,
        "name": "یزد",
        "slug": "شهر-یزد",
        "province_id": 31
      }
    ]
    res.status(200).send({
      message: "دریافت شهر ها با موفقیت انجام شد",
      data: cities
    })

  } catch (err) {
    res.status(400).send({
      status: "fail",
      message: err.message,
    });
  }
}

module.exports = {
  provinces,
  cities
}