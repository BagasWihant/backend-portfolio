import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import { RocketIcon } from "@radix-ui/react-icons";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function General({ auth }) {
    const initialState = {
        title_en: "",
        title_id: "",
        sub_title_en: "",
        sub_title_id: "",
        small_sub_title_en: "",
        small_sub_title_id: "",
        description_en: "",
        description_id: "",
        contact_text_en: "",
        contact_text_id: "",
    };
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState("");
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
            const response = await axios.post(route("general.store"), {
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
            });

            if (response.status == 200) {
                clearState();
                setMessage("Data has been saved");
                setSuccess(true);
                return;
            }
            throw new Error("Something went wrong");
        } catch (error) {
            setSuccess(false);
            setMessage(error.response.data.message);
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl dark:text-white text-gray-800  leading-tight ">
                    General Text
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 dark:bg-gray-800 dark:text-white  bg-white overflow-hidden shadow-md rounded-lg lg:p-7 p-4 flex flex-col gap-3">
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
                                    Sub Judul Kecil{" "}
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
                                    Small Sub Title{" "}
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
                                    Deskripsi{" "}
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
                                    Description{" "}
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
                                    Deskripsi Kontak{" "}
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
                                    Contact Desc{" "}
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
                            className="bg-blue-500 dark:text-white"
                        >
                            Simpan
                        </Button>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
