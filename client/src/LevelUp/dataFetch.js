import axios from 'axios';
const url = 'https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes';
const App = () => {
	const [dishes, setDishes] = useState([]);
	useEffect(() => {
		const fetchDishes = async url => {
			const res = await axios.get(url);
			setDishes(res.data);
		};
		fetchDishes(url);
  }, [url]);
  // render dihses ...