function calculateDay(payload){
    const day = new Date();
    day.setDate(day.getDate() + payload);
    const formatday = [
      day.getFullYear(),
      (day.getMonth() + 1).toString().padStart(2, '0'),
      (day.getDate()).toString().padStart(2, '0'),
    ].join('-');
    // console.log('yes',formatday);
        return formatday;
}


export  {calculateDay};