export const signupFetch = async(username, email, password) =>{
    try{
        const response = await fetch("http://localhost:5001/users/signup", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
            }),
        });
        const data = await response.json();
        console.log("data in signupFetch", data);
        return data;
    }catch (error){
        console.log(error);
        alert("there is an error. please check your  console.");
    }
    };

    export const loginFetch = async (username, password) =>{
        console.log("username password", username, password)
    try {
        const response = await fetch("http://localhost:5001/users/login",{
                method: "POST",
                mode: "cors",
                headers:{
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            });
            const data = await response.json();
            console.log("data in loginFetch", data);
            return data;
    }catch (error){
            console.log(error);
            alert("there is an error. please check your console.");
    };
    };

    export const fetchimages = async (page = 1, perPage = 20) => {
        try {
            const response = await fetch("", {
                method: "GET",
                headers: {
                    "content-type": "application/json"
                }
            });
    
            if (!response.ok) {
                throw new Error(`HTTPS error! status: ${response.status}`);
            }
    
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching images:", error);
            alert("There was an error fetching the images. Please check the console for more details.");
        }
    };
    