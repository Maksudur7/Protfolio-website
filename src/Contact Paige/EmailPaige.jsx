import { Html } from "@react-email/components";
import { Button } from "flowbite-react";


const EmailPaige = () => {
    return (
        <Html>
            <Button
                href="maksudurrahamanmishu7@gmail.com"
                style={{ background: "#000", color: "#fff", padding: "12px 20px" }}
            >
                Click me
            </Button>
        </Html>
    );
};

export default EmailPaige;


