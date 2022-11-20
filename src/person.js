import axios from "axios";

// Define state default values
state = {
    persons: []
}

// Component lifecycle Callback

componentDidMount = () => {
    axios.get(`https://randomuser.me/api/?results=10`)
    .then(res => {
        console.log(res.data);
        const persons = res.data.results;
        this.setState({persons})
    })
}