class Visit {

  visitSchema(data) {

    let visitData = {
      fullName: data.fullName || null,
      phoneNumber: data.phoneNumber || null,
      city: data.city || null,
      province: data.province || null,
      zone: data.zone || null,
      area: data.area || null,
      distance: data.distance || null,
      address: data.address || null,
      product: data.product || null,
      cost: data.cost || null,
      farmerCode: data.farmerCode || null,
      expertCode: data.expertCode || null,
      expertName: data.expertName || null,

    };

    Object.keys(visitData).forEach((k) => visitData[k] == null && delete visitData[k]);

    return visitData;
  };

  calculateCost(dist, area, rate = 1) {


    let registerStationCost = (rate === 1) ? 18000 : ((rate === 2) ? 14000 : 10000);


    let distance = dist * 2;
    let hectare = area;

    // مقادیر ثابت در فرمول.
    const eachKiloMeterCost = 900;
    const stationValue = 10000;

    // مقادیری که با توجه به ورودی کاربر محاسبه میشود.
    const stationsCount = calcStationCount(hectare);
    const serviceCost = calcServiceCost(hectare);

    const analyzeCost = 55000;
    const visitCost = (registerStationCost * stationsCount ) + serviceCost;
    const transportationCost = eachKiloMeterCost * distance;

    let result = visitCost + transportationCost + analyzeCost;
    return Math.round(result);

  };


  visitId() {
    let timeStamp = String(Date.now());
    timeStamp = timeStamp.slice(9, 13);
    let str = makeid();
    let visitCode = 'v' + str + timeStamp;
    return visitCode;
  }

};


function calcStationCount(hectare) {

  // تعداد ایستگاه ها
  let stationCount = 0;

  // تبدیل هکتار به متر مربع
  const squareMeter = (hectare * 10000);

  if (squareMeter < 2000) {
    // نکته: در تقسیم متر مربع بر عدد (مثلا اینجا 500) مقدار صحیح (بدون اعشار) مد نظر است.
    stationCount = squareMeter / 500;
  } else if (squareMeter < 5000) {
    stationCount = squareMeter / 800;
  } else if (squareMeter < 10000) {
    stationCount = squareMeter / 1400;
  } else if (squareMeter < 20000) {
    stationCount = squareMeter / 2700;
  } else if (squareMeter < 40000) {
    stationCount = squareMeter / 5000;
  } else if (squareMeter < 100000) {
    stationCount = squareMeter / 6500;
  } else if (squareMeter < 500000) {
    stationCount = squareMeter / 10000;
  } else {
    stationCount = squareMeter / 12000;
  }

  return stationCount;
};

function calcServiceCost(hectare) {

  // تعداد ایستگاه ها
  let serviceCost = 0;

  // تبدیل هکتار به متر مربع
  const squareMeter = (hectare * 10000);

  if (squareMeter < 2000) {
    serviceCost = 63000;
  } else if (squareMeter < 5000) {
    serviceCost = 76000;
  } else if (squareMeter < 10000) {
    serviceCost = 90000;
  } else if (squareMeter < 20000) {
    serviceCost = 100000;
  } else if (squareMeter < 30000) {
    serviceCost = 115000;
  } else if (squareMeter < 40000) {
    // اشتباه نشده است سید جان! با قبلی برابر است اما ممکن است بعدا تغییر کند.
    serviceCost = 115000;
  } else if (squareMeter < 100000) {
    serviceCost = 120000;
  } else if (squareMeter < 500000) {
    serviceCost = 140000;
  } else {
    serviceCost = 190000;
  }

  return serviceCost;

};

function makeid() {
  let result = '';
  let characters = 'ABCDEFGHIJKMNOPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
  let charactersLength = characters.length;
  for (let i = 0; i < 1; i++) {
    result +=
      characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

module.exports = Visit;
