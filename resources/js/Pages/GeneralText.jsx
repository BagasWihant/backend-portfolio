import { Button } from "@/components/ui/button";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { useState } from "react";
import { RocketIcon } from "@radix-ui/react-icons";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function General({ auth, data }) {
    const [contentDrawer, setContentDrawer] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const drawerDetail = (data) => {
        setIsOpen(true);
        setContentDrawer(() => (
            <>
                <DrawerHeader>
                    <DrawerTitle className="text-center">Detail </DrawerTitle>
                    <DrawerClose className="absolute top-4 right-4 bg-yellow-500 p-2 rounded-md">
                        close
                    </DrawerClose>
                </DrawerHeader>
                <DrawerDescription className="text-center">
                    {data.title_en}
                </DrawerDescription>
                <div className="p-4 flex flex-col gap-3 max-w-7xl mx-auto">
                    <p className="text-center font-extrabold">English</p>
                    <p>
                        <span className="font-bold">Title :</span>
                        {data.title_en}
                    </p>
                    <p>
                        <span className="font-bold">Sub Title :</span>
                        {data.sub_title_en}
                    </p>
                    <p>
                        <span className="font-bold">Small Sub Title :</span>
                        {data.small_sub_title_en}
                    </p>
                    <p>
                        <span className="font-bold">Description :</span>
                        {data.description_en}
                    </p>
                    <p>
                        <span className="font-bold">Contact :</span>
                        {data.contact_text_en}
                    </p>

                    <p className="font-extrabold text-center">Indonesia</p>
                    <p>
                        <span className="font-bold">Title : </span>
                        {data.title_id}
                    </p>
                    <p>
                        <span className="font-bold">Sub Title : </span>
                        {data.sub_title_id}
                    </p>
                    <p>
                        <span className="font-bold">Small Sub Title : </span>
                        {data.small_sub_title_id}
                    </p>
                    <p>
                        <span className="font-bold">Description :</span>
                        {data.description_id}
                    </p>
                    <p>
                        <span className="font-bold">Contact :</span>
                        {data.contact_text_id}
                    </p>
                </div>
                <DrawerFooter className={"max-w-7xl mx-auto"}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Button
                            className="w-full bg-red-500 p-2 rounded-md"
                            onClick={() => deleteData(data.id)}
                        >
                            Remove
                        </Button>
                        <Button
                            className="w-full bg-green-500 p-2 rounded-md"
                            onClick={() => activatedData(data.id)}
                        >
                            Set Active
                        </Button>
                    </div>
                </DrawerFooter>
            </>
        ));
    };

    const activatedData = async (id) => {
       await axios.patch(route("general.update", id),{act:0})
            .then((response) => {
                if(response.status == 200){
                    setIsOpen(false);
                    router.visit(route("general.index"), {
                        flash: {
                            success: "Data has been activated",
                        },
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const editData = (id) => {
        router.visit(route("general.edit", id));
    };

    const deleteData = (id) => {
        axios
            .delete(route("general.destroy", id))
            .then((res) => {
                router.visit(route("general.index"), {
                    flash: {
                        success: "Data has been deleted",
                    },
                });
            })
            .catch((err) => {
                console.log(err);
            });
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
            <div className="max-w-7xl my-12 mx-auto  overflow-hidden ">
                <Link href={route("general.create")}>
                    <Button className="bg-blue-500 dark:text-white">
                        Add New
                    </Button>
                </Link>
                <div className="my-4 shadow-md rounded-lg lg:p-7 p-4 dark:bg-gray-800 dark:text-white bg-white">
                    <Table>
                        <TableCaption>
                            A list general text in english
                        </TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">
                                    Title
                                </TableHead>
                                <TableHead>Subtitle</TableHead>
                                <TableHead>Description</TableHead>
                                <TableHead className="text-right">
                                    Status
                                </TableHead>
                                <TableHead className="text-right">
                                    Action
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data.map((item) => (
                                <TableRow
                                    key={item.id}
                                >
                                    <TableCell>{item.title_en}</TableCell>
                                    <TableCell>{item.sub_title_en}</TableCell>
                                    <TableCell className="text-ellipsis overflow-hidden whitespace-nowrap inline-block w-52">
                                        {item.description_en}
                                    </TableCell>
                                    <TableCell className={`text-right ${
                                        item.is_active ? "text-green-500" : "text-red-500"
                                    }`}>
                                        {item.is_active
                                            ? "Active"
                                            : "Non Active"}
                                    </TableCell>
                                    <TableCell className="flex justify-center gap-3">
                                        <Button
                                            className="bg-purple-600 p-2 rounded-md dark:text-white"
                                            onClick={() =>
                                                editData(item.id)
                                            }
                                        >
                                            Edit 
                                        </Button>
                                        <Button
                                            className="bg-purple-600 p-2 rounded-md dark:text-white"
                                            onClick={() =>
                                                drawerDetail(item)
                                            }
                                        >
                                            View
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                <Drawer open={isOpen} onOpenChange={setIsOpen}>
                    <DrawerContent className="bg-white dark:bg-gray-600">
                        {contentDrawer}
                        {/* <ScrollArea className="overflow-auto">
                        </ScrollArea> */}
                    </DrawerContent>
                </Drawer>
            </div>
        </AuthenticatedLayout>
    );
}
