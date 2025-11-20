export function getTodayForApi(){
  return new Date().toISOString().slice(0,10)
}

export function getTodayForDisplay(){
    const today = new Date()
    const hari = ["minggu","senin","selasa","rabu","kamis","kamis","jumat","sabtu",] 
    return (`${hari[today.getDay()]},${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`)
}

