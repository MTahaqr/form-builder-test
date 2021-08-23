
export const SaveFormFakeAPI = (data) => {
    const formlist = JSON.parse(localStorage.getItem("formsList"));
    if (formlist) localStorage.setItem("formsList", JSON.stringify([...formlist, { id: formlist.length + 1, name: `Form ${formlist.length + 1}`, control: [...data] }]))
    else localStorage.setItem("formsList", JSON.stringify([{ id: 1, name: `Form 1`, control: [...data] }]))
}

export const GetFormListFakeAPI = () => {
    let formList = JSON.parse(localStorage.getItem("formsList"));
    if (formList) return formList;
    return []
}