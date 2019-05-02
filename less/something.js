const days = (month, year) => {
    if([1, 3, 5, 7, 8, 10, 12].includes(month)){
      return 31
    }else if ([4, 6, 9, 11].includes(month)){
      return 30
    }else year % 4 == 0 ? 29 : 28
}
  
  
  days(2, 2018) //28