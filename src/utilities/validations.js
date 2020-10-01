export const validateEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase())
}

export const validateName = name => {
  const regex = /^[a-zA-Z ]{2,30}$/
  return regex.test(name)
}

// Simple check for mobile added, for supporting more formats, some library can be used
export const validateMobile = mobile => {
  const regex = /^[1-9]{1}[0-9]{9}$/;
  return regex.test(mobile)
}
