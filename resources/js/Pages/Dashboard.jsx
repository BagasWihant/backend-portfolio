import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth, text }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800  leading-tight ">
                    a
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 dark:bg-gray-800 dark:text-white  bg-white overflow-hidden shadow-md rounded-lg lg:p-7 p-4 flex flex-col gap-3">
                    <div className="flex flex-col gap-1">
                        <Label htmlFor="title">Title</Label>
                        <Input type="text" placeholder="Title" id="title" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <Label htmlFor="subtitle">Sub Title</Label>
                        <Input type="text" placeholder="Sub Title" id="subtitle" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <Label htmlFor="smallsubtitle">Small Sub Title </Label>
                        <Input type="text" placeholder="Small Sub Title" id="smallsubtitle" />
                    </div>
                    <Button variants="destructive" className="bg-blue-500 dark:text-white">Simpan</Button>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
