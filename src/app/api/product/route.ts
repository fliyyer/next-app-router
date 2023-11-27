import { NextRequest, NextResponse } from "next/server";
const datas = [
    {
        id: 1,
        title: "Topi Adidas",
        price: 100000,
        image: 'https://www.adidas.co.id/media/catalog/product/cache/3bec5fdb79d91223b1a151be2b21ce8d/i/i/ii3360_1_hardware_photography_front20center20view_grey.jpg'
    },
    {
        id: 2,
        tile: "Baju Adidas",
        price: 150000,
        image: 'https://www.adidas.co.id/media/catalog/product/cache/3bec5fdb79d91223b1a151be2b21ce8d/i/t/it8190_2_apparel_photography_front20center20view_grey.jpg'
    },
];
export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    if (id) {
        const detailProduct = datas.find((item) => item.id === Number(id));
        if (!detailProduct) {
            return NextResponse.json({ status: 404, message: "Product not found", data: null });
        }
        return NextResponse.json({ status: 200, message: "Success", data: detailProduct });
    }
    return NextResponse.json({ status: 200, message: "Success", data: datas });
}
