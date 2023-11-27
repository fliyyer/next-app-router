/* eslint-disable @next/next/no-img-element */

import { type } from "os";

/* eslint-disable react/jsx-key */
type ProductPageProps = {
    params: {
        slug: string[]
    }
}

async function getData() {
    const res = await fetch('https://fakestoreapi.com/products');

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

interface Product {
    id: number
    title: string
    price: number
    image: string
}


export default async function ProductPage(props: ProductPageProps) {
    const { params } = props
    const products: Product[] = await getData()

    return (
        <main className="flex flex-row mx-auto justify-between max-w-7xl min-h-screen">
            <div className="grid grid-cols-4 py-20 gap-8">
                {products.map((product) => (
                    <div key={product.id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="p-6 w-full h-64" src={product.image} alt={product.title} />
                        </a>
                        <div className="px-5 pb-5">
                            <a href="#">
                                <h5 className="text-base font-semibold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
                            </a>
                            <div className="flex items-center mt-5 justify-between">
                                <span className="text-2xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                                <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                            </div>
                        </div>
                    </div>
                ))}
                {
                    params.slug && (
                        <div>
                            <p>Ini detail Product</p>
                            <p>index 1 : {params.slug[0]}</p>
                            <p>index 2 : {params.slug[1]}</p>
                            <p>index 3 : {params.slug[2]}</p>
                        </div>
                    )
                }
            </div>
        </main>
    )
}