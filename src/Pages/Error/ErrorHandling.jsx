import { useRouteError } from "react-router-dom";
import ContainerError from '../../Components/Container/ContainerError';


// custom csss 

export default function ErrorPage() {
    const error = useRouteError()
    console.error(error);

    return (
        <div>
        <ContainerError />
        <p>
            <i>{error.statusText || error.message}</i>
        </p>
        </div>
    )
}