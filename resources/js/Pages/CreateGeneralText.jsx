import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Head, Link, router } from "@inertiajs/react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { RocketIcon } from "lucide-react";

export default function CreateGeneralText({ auth, status, data }) {
    const [message, setMessage] = useState(null);
    const initialState = {
        title_en: data?.title_en ||"",
        title_id: data?.title_id || "",
        sub_title_en: data?.sub_title_en || "",
        sub_title_id: data?.sub_title_id || "",
        small_sub_title_en: data?.small_sub_title_en || "",
        small_sub_title_id: data?.small_sub_title_id || "",
        description_en: data?.description_en || "",
        description_id: data?.description_id || "",
        contact_text_en: data?.contact_text_en || "",
        contact_text_id: data?.contact_text_id || "",
    };
    const [
        {
            title_en,
            title_id,
            sub_title_en,
            sub_title_id,
            small_sub_title_en,
            small_sub_title_id,
            description_en,
            description_id,
            contact_text_en,
            contact_text_id,
        },
        setState,
    ] = useState(initialState);

    const clearState = () => {
        setState({ ...initialState });
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setState((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const requestData = {
                title_en,
                title_id,
                sub_title_en,
                sub_title_id,
                small_sub_title_en,
                small_sub_title_id,
                description_en,
                description_id,
                contact_text_en,
                contact_text_id,
            };
            const response = await (status === "create" ? axios.post(route('general.store'), requestData) : axios.patch(route('general.update', data?.id), requestData));

            if (response.status == 200) {
                router.visit(route("general.index"), {
                    flash: {
                        success: "Data has been created",
                    },
                });
                return;
            }
            throw new Error("Something went wrong");
        } catch (error) {
            console.log(error);
            setMessage(error.response.message);
        }
    };

    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl dark:text-white text-gray-800  leading-tight ">
                    {status === 'create' ? "Create General Text" : "Edit General Text"}
                </h2>
            }
        >
            <Head title="Create General Text" />
            <div className=" max-w-7xl mx-auto mt-12">
                {message && (
                    <Alert
                        className={`${
                            success
                                ? "bg-green-300 dark:bg-green-800"
                                : "bg-red-300 dark:bg-red-800"
                        }  dark:text-white`}
                    >
                        <RocketIcon className="h-4 w-4 dark:text-white" />
                        <AlertTitle>{success ? "Success" : "Error"}</AlertTitle>
                        <AlertDescription>{message}</AlertDescription>
                    </Alert>
                )}
                <Link
                    href={route("general.index")}
                    className="bg-amber-500 dark:bg-amber-700 text-white font-bold py-2 px-4 rounded"
                >
                    Back
                </Link>
                <div className="sm:px-6 lg:px-8 my-5 flex flex-col gap-3 dark:bg-gray-800 dark:text-white shadow-md rounded-lg lg:p-7 p-4 bg-white">
                    <form onSubmit={handleSubmit}>
                        <p>Hero Section</p>
                        <div className="grid md:grid-cols-2 md:gap-5 gap-3">
                            <div>
                                <Label htmlFor="title_id">Judul</Label>
                                <Input
                                    type="text"
                                    placeholder="Title"
                                    id="title_id"
                                    value={title_id}
                                    onChange={handleChange}
                                />

                                <Label htmlFor="sub_title_id">Sub Judul</Label>
                                <Input
                                    type="text"
                                    placeholder="Sub Title"
                                    id="sub_title_id"
                                    value={sub_title_id}
                                    onChange={handleChange}
                                />

                                <Label htmlFor="small_sub_title_id">
                                    Sub Judul Kecil
                                </Label>
                                <Input
                                    type="text"
                                    placeholder="Small Sub Title"
                                    id="small_sub_title_id"
                                    value={small_sub_title_id}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <Label htmlFor="title_en">Title</Label>
                                <Input
                                    type="text"
                                    placeholder="Title"
                                    id="title_en"
                                    value={title_en}
                                    onChange={handleChange}
                                />

                                <Label htmlFor="sub_title_en">Sub Title</Label>
                                <Input
                                    type="text"
                                    placeholder="Sub Title"
                                    id="sub_title_en"
                                    value={sub_title_en}
                                    onChange={handleChange}
                                />

                                <Label htmlFor="small_sub_title_en">
                                    Small Sub Title
                                </Label>
                                <Input
                                    type="text"
                                    placeholder="Small Sub Title"
                                    id="small_sub_title_en"
                                    value={small_sub_title_en}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <p>About Section</p>
                        <div className="grid md:grid-cols-2 md:gap-5 gap-3">
                            <div className="">
                                <Label htmlFor="description_id">
                                    Deskripsi
                                </Label>
                                <Textarea
                                    placeholder="Type Description here"
                                    id="description_id"
                                    value={description_id}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="">
                                <Label htmlFor="description_en">
                                    Description
                                </Label>
                                <Textarea
                                    placeholder="Type Description here"
                                    id="description_en"
                                    value={description_en}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <p>Contact Section</p>
                        <div className="grid md:grid-cols-2 md:gap-5 gap-3">
                            <div className="">
                                <Label htmlFor="contact_text_id">
                                    Deskripsi Kontak
                                </Label>
                                <Input
                                    type="text"
                                    placeholder="Small Sub Title"
                                    id="contact_text_id"
                                    value={contact_text_id}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="">
                                <Label htmlFor="contact_text_en">
                                    Contact Desc
                                </Label>
                                <Input
                                    type="text"
                                    placeholder="Small Sub Title"
                                    id="contact_text_en"
                                    value={contact_text_en}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <Button
                            type="submit"
                            className="w-full mt-5 bg-blue-500 dark:text-white"
                        >
                            {status === "create" ? "Save" : "Update"}
                        </Button>
                    </form>
                </div>
            </div>
        </Authenticated>
    );
}
