import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import axios from "axios";
import { MultiSelect } from "react-multi-select-component";
export default function CreateProject({ auth, stack }) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [ldescription, setLdescription] = useState("");
    const [img, setImg] = useState("");
    const [git, setGit] = useState("");
    const [demo, setDemo] = useState("");
    const [select, setSelect] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const fData = new FormData();
        fData.append("name", name);
        fData.append("description", description);
        fData.append("ldescription", ldescription);
        fData.append("img", img);
        fData.append("github", git);
        fData.append("demo", demo);
        fData.append("stacks", JSON.stringify(select));
        console.log(JSON.stringify(select));

        axios
            .post(route("project.store"), fData)
            .then((res) => {
                console.log(res);
                // router.visit(route("project.index"), {
                //     flash: {
                //         success: "Data has been created",
                //     },
                // });
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <>
            <Head title="Add Project" />
            <Authenticated
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl dark:text-white text-gray-800  leading-tight ">
                        Add Project
                    </h2>
                }
            >
                <div className="mt-12">
                    <Link
                        href={route("project.index")}
                        className="bg-amber-600 p-2 rounded-md dark:text-white"
                    >
                        Back
                    </Link>
                    <div className="my-4 shadow-md rounded-lg lg:p-7 p-4 dark:bg-gray-800 dark:text-white bg-white">
                        <form onSubmit={handleSubmit}>
                            <Label htmlFor="name">Name</Label>
                            <Input
                                type="text"
                                placeholder="Name Project"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <Label htmlFor="desc">Description</Label>
                            <Input
                                type="text"
                                placeholder="Description Project"
                                id="desc"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <Label htmlFor="ldesc">Long Description</Label>
                            <Input
                                type="text"
                                placeholder="Description Project"
                                id="ldesc"
                                value={ldescription}
                                onChange={(e) =>
                                    setLdescription(e.target.value)
                                }
                            />
                            <Label htmlFor="name">Link Git</Label>
                            <Input
                                type="text"
                                placeholder="Git URL"
                                id="name"
                                value={git}
                                onChange={(e) => setGit(e.target.value)}
                            />
                            <Label htmlFor="name">Link Demo</Label>
                            <Input
                                type="text"
                                placeholder="Demo Link"
                                id="name"
                                value={demo}
                                onChange={(e) => setDemo(e.target.value)}
                            />
                            <Label htmlFor="path">ScreenShoot</Label>
                            <Input
                                type="file"
                                id="path"
                                onChange={(e) => setImg(e.target.files[0])}
                            />
                            <Label htmlFor="multiple">Stack</Label>
                            <MultiSelect
                                id="multiple"
                                options={stack}
                                value={select}
                                onChange={setSelect}
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
