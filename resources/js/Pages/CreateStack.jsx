import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, useForm } from "@inertiajs/react";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import axios from "axios";

export default function CreateStack({ auth, status }) {

    const [name, setName] = useState("")
    const [img, setImg] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        const fData = new FormData();
        fData.append("name", name);
        fData.append("img", img);
        
        axios.post(route("stack.store"), fData)
            .then((res) => {
                router.visit(route("stack.index"), {
                    flash: {
                        success: "Data has been created",
                    },
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <Head title="Create Stack" />
            <Authenticated
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl dark:text-white text-gray-800  leading-tight ">
                        {status === "create" ? "Create Stack" : "Update Stack"}
                    </h2>
                }
            >
                <div className="mt-12">
                    <Link
                        href={route("stack.index")}
                        className="bg-purple-600 p-2 rounded-md dark:text-white"
                    >
                        Back
                    </Link>
                    <div className="my-4 shadow-md rounded-lg lg:p-7 p-4 dark:bg-gray-800 dark:text-white bg-white">
                        <form onSubmit={handleSubmit}>
                            <Label htmlFor="name">Name</Label>
                            <Input
                                type="text"
                                placeholder="Name Stack"
                                id="name"
                                value={name}
                                onChange={(e) =>setName(e.target.value)}
                            />
                            <Label htmlFor="path">Image</Label>
                            <Input
                                type="file"
                                id="path"
                                onChange={(e) => setImg(e.target.files[0])}
                            />
                            <div className="flex justify-end">
                                <Button
                                    type="submit"
                                    className="bg-blue-600 mt-5 p-2 rounded-md dark:text-white w-full"
                                >
                                    Save
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </Authenticated>
        </>
    );
}
