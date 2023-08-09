import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {

    const router = useRouter();
    return (
        <header>
            <div className="logo">
                Blog
                <Link href="/"><Image src="/next.svg" alt="Logo" width={100} height={50} /> </Link> 
            </div>
            <div className="menu">
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/blog">Blog</Link>
                    </li>
                </ul>
            </div>
            <button onClick={() => router.push('/about')  } >About</button>
        </header>   
    )
}
export default Header;