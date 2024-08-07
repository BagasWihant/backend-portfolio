import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

export default function ListProject({ auth }) {
    return (
        <>
            <Head title="List Project" />
            <Authenticated
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl dark:text-white text-gray-800  leading-tight ">
                        List Project
                    </h2>
                }
            >
                <div className="mt-12">
                    <Link
                        href={route("project.create")}
                        className="bg-amber-600 p-2 rounded-md dark:text-white"
                    >
                        Create Project
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
                                {/* {data.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell>{item.title_en}</TableCell>
                                    <TableCell>{item.sub_title_en}</TableCell>
                                    <TableCell className="text-ellipsis overflow-hidden whitespace-nowrap inline-block w-52">
                                        {item.description_en}
                                    </TableCell>
                                    <TableCell
                                        className={`text-right ${
                                            item.is_active
                                                ? "text-green-500"
                                                : "text-red-500"
                                        }`}
                                    >
                                        {item.is_active
                                            ? "Active"
                                            : "Non Active"}
                                    </TableCell>
                                    <TableCell className="flex justify-center gap-3">
                                        <Button
                                            className="bg-amber-600 p-2 rounded-md dark:text-white"
                                            onClick={() => editData(item.id)}
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            className="bg-amber-600 p-2 rounded-md dark:text-white"
                                            onClick={() => drawerDetail(item)}
                                        >
                                            View
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))} */}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </Authenticated>
        </>
    );
}
