import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Home() {
    return (
        <section className="container p-4 border border-black mx-auto mt-4">
            <div className="w-3/4 h-0.5 mt-4 bg-black"></div>
            <h1 className="font-bold text-3xl my-10">
                Hamed Nazari
            </h1>
            <span className="text-primary font-semibold text-lg">
                junior Frontend Developer
            </span>
            <div className="mt-6 ">
                <p>Iran,Golestan Province</p>
                <p>Aqqala</p>
                <p>hmdnazari76@gmail.com</p>
            </div>
            <div className="flex flex-col gap-y-2 mt-6">
                <p className="text-primary font-bold">
                    Skills
                </p>
                <p className="min-w-96 w-full">
                    HTML,CSS,JavaScript,Accesibilty,Figma to
                    design,Responisve web Design,Tecnical
                    Writing,Presentation
                </p>
            </div>
            <div className="flex flex-col gap-y-2 mt-6">
                <div className="text-primary font-bold">
                    Education
                </div>
                <p className="min-w-96 w-full">
                    <div className="font-semibold text-sky-600">
                        Scool Name, Location -Degree
                    </div>
                    Month 20xx to Month 20xx List of Exiting
                    Thing u did at University
                </p>
                <p className="text-primary font-bold">
                    Education
                </p>
                <p className="min-w-96 w-full">
                    <div className="font-semibold text-sky-600">
                        Company Name,Location - Job Title
                    </div>
                    feb 2022 to fev 2024 List of Exiting
                    <ul className="list-disc list-inside">
                        <li>React</li>
                        <li>Nextjs</li>
                        <li>Figma</li>
                    </ul>
                    this is skills i gaind
                </p>
                <div className=" mt-6">
                    <p className="text-primary font-semibold">
                        Across the Internet
                    </p>
                    <p className="flex justify-start items-center gap-x-2">
                        <Github />
                        GitHub:{" "}
                        <a
                            href="https://github.com/hamed252252"
                            className="text-blue-500"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            github.com/hamed252252
                        </a>
                    </p>
                    <p className="flex justify-start items-center gap-x-2">
                        <Linkedin />
                        LinkedIn:{" "}
                        <Link
                            href="https://www.linkedin.com/in/hamed-nazari-106981216/"
                            className="text-blue-500"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            linkedin.com/in/hamed-nazari-106981216
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
}
