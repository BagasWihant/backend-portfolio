import logo from '../../assets/dark.jpeg';
export default function ApplicationLogo(props) {
    return (
        <img {...props}
            src={logo}
            alt="Laravel Logo"
            width={250}
        />
    );
}
