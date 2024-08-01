import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router, useForm, usePage } from "@inertiajs/react";

export default function Dashboard({ auth, text }) {
    const props = usePage().props;
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const resp = post("general")
        const data = await resp.json()
        console.log(data);
    };

    const { data, setData, post, processing, errors } = useForm({
        title_en: '',
        title_id: '',
        sub_title_en: '',
        sub_title_id: '',
        small_sub_title_en: '',
        small_sub_title_id: '',
        description_en: '',
        description_id: '',
        contact_text_en: '',
        contact_text_id: '',
      })

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
                    <form onSubmit={handleSubmit}>
                        <p>Hero Section</p>
                        <div className="grid md:grid-cols-2 md:gap-5 gap-3">
                            <div>
                                <Label htmlFor="title_id">Judul</Label>
                                <Input type="text" placeholder="Title" id="title_id" value={data.title_id} onChange={(e) => setData('title_id', e.target.value)}/>

                                <Label htmlFor="subtitle_id">Sub Judul</Label>
                                <Input type="text" placeholder="Sub Title" id="subtitle_id" value={data.sub_title_id} onChange={(e) => setData('sub_title_id', e.target.value)} />

                                <Label htmlFor="smallsubtitle_id">Sub Judul Kecil </Label>
                                <Input type="text" placeholder="Small Sub Title" id="smallsubtitle_id" value={data.small_sub_title_id} onChange={(e) => setData('small_sub_title_id', e.target.value)} />
                            </div>
                            <div>
                                <Label htmlFor="title_en">Title</Label>
                                <Input type="text" placeholder="Title" id="title_en" value={data.title_en} onChange={(e) => setData('title_en', e.target.value)}/>

                                <Label htmlFor="subtitle_en">Sub Title</Label>
                                <Input type="text" placeholder="Sub Title" id="subtitle_en" value={data.sub_title_en} onChange={(e) => setData('sub_title_en', e.target.value)} />

                                <Label htmlFor="smallsubtitle_en">Small Sub Title </Label>
                                <Input type="text" placeholder="Small Sub Title" id="smallsubtitle_en" value={data.small_sub_title_en} onChange={(e) => setData('small_sub_title_en', e.target.value)} />
                            </div>
                        </div>

                        <p>About Section</p>
                        <div className="grid md:grid-cols-2 md:gap-5 gap-3">
                            <div className="">
                                <Label htmlFor="description_id">Deskripsi </Label>
                                <Textarea placeholder="Type Description here" id="description_id" value={data.description_id} onChange={(e) => setData('description_id', e.target.value)} />
                            </div>
                            <div className="">
                                <Label htmlFor="description_en">Description </Label>
                                <Textarea placeholder="Type Description here" id="description_en" value={data.description_en} onChange={(e) => setData('description_en', e.target.value)} />
                            </div>
                        </div>

                        <p>Contact Section</p>
                        <div className="grid md:grid-cols-2 md:gap-5 gap-3">
                            <div className="">
                                <Label htmlFor="contact_desc_id">Deskripsi Kontak </Label>
                                <Input type="text" placeholder="Small Sub Title" id="contact_desc_id" value={data.contact_text_id} onChange={(e) => setData('contact_text_id', e.target.value)} />
                            </div>
                            <div className="">
                                <Label htmlFor="contact_desc_en">Contact Desc </Label>
                                <Input type="text" placeholder="Small Sub Title" id="contact_desc_en" value={data.contact_text_en} onChange={(e) => setData('contact_text_en', e.target.value)} />
                            </div>

                        </div>
                        <Button type="submit" disabled={processing} className="bg-blue-500 dark:text-white">Simpan</Button>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout >
    );
}
