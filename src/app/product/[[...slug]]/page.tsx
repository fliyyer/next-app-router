

export default function DetailProductPage({ params }: { params: { slug: string[] } }) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>{params.slug ? "Detail Product Page" : "Product Page"}</h1>
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
    )
}