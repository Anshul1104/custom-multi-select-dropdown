 //var url = 'https://api.instantwebtools.net/v1/passenger?page=0&size=10';

    //with only axios

    // async function getData() {
    //     var result = await axios.get(url);
    //     setOptions(result.data.data);
    //     console.log(result.data.data);
    // }

    //with react-query and axios

    // const { data, status } = useQuery('data',
    //     () => axios('https://api.instantwebtools.net/v1/passenger?page=0&size=10')
    //         .then(res => res.json()))
    //         setOptions(data);

    // with react-query and fetch

    // const fetchApi = async () => {
    //     return (await fetch(`https://api.instantwebtools.net/v1/passenger?page=0&size=10`)).json()
    // }

    // const { data, status } = useQuery('dataShow', fetchApi);

    // setOptions(data);

    // const { isLoading, error, data, status } = useQuery("repoData", () =>
    //     fetch(
    //         "https://api.github.com/repos/tannerlinsley/react-query"
    //     ).then((res) => res.json())
    // );
    // if (isLoading) return "Loading...";
    // if (error) return "An error has occurred: " + error.message;

    // console.log(data);


    // const memoizedCallback = useCallback(() => {
    //     //getData() 
    // });


    // useEffect(() => {
    //     // memoizedCallback();
    //     document.addEventListener("click", close);
    //     return () => document.removeEventListener("click", close);
    // }, []);


    // {
    //     status === 'loading' && (<div>Loading...</div>)
    // }
    // {
    //     status === 'error' && (<div>Error fetching data</div>)
    // }
    // {
    //     status === 'success' &&  }









    // const queryClient = new QueryClient({
//     defaultOptions: {
//       queries: {
//         refetchOnWindowFocus: true,
//         retry: 0
//         // refetchOnMount: false,
//         // refetchOnReconnect: false,
//         // suspense: true
//       },
//     },
//   });