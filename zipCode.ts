function isValidZipCd(): boolean {
    const element = document.getElementById('_zip') as HTMLInputElement;
    const zip_cd = element.value;
  
    if ((zip_cd.length === 5 || zip_cd.length === 9) && !!parseInt(zip_cd)) {
      if (zip_cd.length === 9) {
        return zip_cd.slice(5, 9) in { '0000': '', '9999': '' } ? false : true;
      }
      return true;
    } else {
      return false;
    }
  }  