import { NextRequest, NextResponse } from "next/server";
const datas = [
    {
        id: 1,
        name: "Sepatu Adidas",
        price: 100000,
    },
    {
        id: 2,
        name: "Sepatu Reebok",
        price: 150000,
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
