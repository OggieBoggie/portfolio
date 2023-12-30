export default function ContactMain() {

    return (
        <div className="flex flex-col items-start p-6 bg-cyan">
            <h1 className="text-3xl font-bold text-white">Contact Me</h1>
            <ul className="text-lg text-white">
                <li className="mt-2">
                    <p className="text-lg">
                        Email:{" "}
                        <a href="mailto:tommy.nguyen.vanc@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-custom-cyan"
                        >tommy.nguyen.vanc@gmail.com</a>
                    </p>
                </li>
                <li className="mt-2">
                    <p className="text-lg">
                        Discord: oogieboggie
                    </p>
                </li>
                <li className="mt-2">
                    <p className="text-lg">
                        Linkedin:{" "}
                        <a href="https://www.linkedin.com/in/tommy-nguyen-6083bb291/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-custom-cyan">
                                Tommy Nguyen
                            </a>
                    </p>
                </li>
            </ul>
        </div>
    );
}
