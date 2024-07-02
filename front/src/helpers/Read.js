import axios from 'axios';

const crudRead = (Link, setData, setData2, setData3) => {
    axios.get(Link)
    .then(resp => {
        setData(resp.data)
        setData2(resp.data.nhits)
        setData3(Math.ceil())
    });
};

export default crudRead;