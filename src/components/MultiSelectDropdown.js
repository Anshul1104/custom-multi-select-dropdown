import { useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import OutsideClickHandler from "react-outside-click-handler";
import './multiSelectDropdown.css';
import { IoIosClose } from 'react-icons/io';

const MultiSelectDropdown = () => {

    const userData = {
        "people": [
            {
                "craft": "ISS",
                "name": "Mark Vande Hei"
            },
            {
                "craft": "ISS",
                "name": "Pyotr Dubrov"
            },
            {
                "craft": "ISS",
                "name": "Anton Shkaplerov"
            },
            {
                "craft": "Shenzhou 13",
                "name": "Zhai Zhigang"
            },
            {
                "craft": "Shenzhou 13",
                "name": "Wang Yaping"
            },
            {
                "craft": "Shenzhou 13",
                "name": "Ye Guangfu"
            },
            {
                "craft": "ISS",
                "name": "Raja Chari"
            },
            {
                "craft": "ISS",
                "name": "Tom Marshburn"
            },
            {
                "craft": "ISS",
                "name": "Kayla Barron"
            },
            {
                "craft": "ISS",
                "name": "Matthias Maurer"
            }
        ],
        "message": "success",
        "number": 10
    }
    const [tags, setTags] = useState([]);
    const [value, setValue] = useState('')
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");

    const fetchData = async () => {
        const { data } = await axios.get('http://api.open-notify.org/astros.json');
        return data?.people;
    };

    // Used React Query to cache the data
    const { isLoading, isSuccess, isError, data: options } = useQuery("data", fetchData, {
        retry: 0
    });

    function filter(options) {
        return options?.filter((option) => option?.name.toLowerCase().indexOf(query.toLowerCase()) > -1);
    }

    function displayValue() {
        if (query.length > 0) return query;
        if (value) {
            const trimmedInput = value?.name;
            if (trimmedInput?.length && !tags.includes(trimmedInput)) {
                setTags(prevState => [...prevState, trimmedInput]);
                setValue('');
            }
            return value?.label;
        }
        return "";
    }

    // Select tag Handler
    const selectOptionHandler = (option) => {
        setQuery("");
        setValue(option)
        setOpen(false);
    }

    // Delete tags Handler
    const deleteTagHandler = (index) => {
        setTags(prevState => prevState.filter((tag, i) => i !== index))
    }

    console.log(options)

    return (
        <>
            <OutsideClickHandler
                onOutsideClick={() => {
                    setOpen(false);
                }}
            >
                <div className="dropdown">
                    <div className="container">
                        {tags?.map((tag, index) => (
                            <div className="tag" key={index}>
                                {tag}
                                <button onClick={() => deleteTagHandler(index)}><IoIosClose fontSize='20px' color='#B3B2B3' /></button>
                            </div>
                        ))}

                        <input
                            type="text"
                            value={displayValue()}
                            placeholder='+ Add a tag'
                            onChange={e => { setQuery(e.target.value); setValue(null) }}
                            onClick={() => setOpen(!open)}
                        />

                    </div>
                    {
                        tags?.length ?
                            (<div className="deselect-icon" onClick={(e) => {
                                e.stopPropagation();
                                e.preventDefault();
                                setTags([]);
                            }}>
                                <IoIosClose />
                            </div>)
                            : ''
                    }


                    {/* {isError && <p>{error.message}</p>} */}

                    {/* API Failing because of http error */}
                    {/* Dropdown Items*/}
                    {(isSuccess || isError) &&
                        (
                            <div className={`options ${open ? "open" : null}`}>
                                {
                                    isLoading ? <div className='loading-mge'>...Loading </div>
                                        :
                                        filter(options ? options : userData.people)?.map(option => {
                                            if (!tags.includes(option?.name)) {
                                                return (
                                                    <div
                                                        key={option?.name}
                                                        className={`option ${value === option ? "selected" : ''}`}
                                                        onClick={() => selectOptionHandler(option)}>
                                                        {option?.name}
                                                    </div>
                                                )
                                            }
                                        })
                                }
                            </div>
                        )
                    }
                </div>
            </OutsideClickHandler>

        </>
    )
}

export default MultiSelectDropdown;


