const uploadSingleImage = (e, setIMG,setLoading) => {
    setLoading(true)
    const file = e.target.files[0];
    const name = file.name
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
        setIMG({
            img: reader.result,
            name: name
        })
        setLoading(false)
    }
};

export {
    uploadSingleImage
}