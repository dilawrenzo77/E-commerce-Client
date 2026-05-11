
import { auth } from "@clerk/nextjs/server";

export default async function page() {
    const {getToken} = await auth();
    const token = await getToken();
    

    const res = await fetch("http://localhost:8000/test", {
        credentials: 'include',
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
    const data =  await res.json();

    const resOrder = await fetch("http://localhost:8001/test", {
        credentials: 'include',
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
    const dataOrder =  await resOrder.json();

    const resPayment = await fetch("http://localhost:8002/test", {
        headers: {
            "Authorization": `Bearer ${token}`
        },
        credentials: "include"

    });

    const dataPayment = await resPayment.json();

    // console.log(dataOrder, "userOrder auth data");
    // console.log(data, "userProduct auth data");
    // console.log(dataPayment, "userPayment auth data");
    return (
        <div>testPage</div>
    )
};
