"use client"

import { 
    HomeIcon,
    ListOrderedIcon,
    LogInIcon,
    MenuIcon,
    PercentIcon,
    ShoppingCartIcon,
    LogOutIcon
} from "lucide-react";
import { Card } from "./card";
import { Button } from "./button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader } from "./sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Separator } from "@radix-ui/react-separator";

const Header = () => {
    const {status, data} = useSession();

    const handleLoginClick = async () => {
        await signIn();
    }
    const handleLogoutClick = async () => {
        await signOut();
    }

    return <Card className="flex items-center justify-between p-[30px]">

        <Sheet>
            <SheetTrigger asChild> 
            {/* asChild faz com que o primeiro filho quando for clicado vai abrir o menu ou seja o button. */}
                <Button size="icon" variant="outline">
                    <MenuIcon/>
                </Button>
            </SheetTrigger>

            <SheetContent side="left">
                <SheetHeader className="text-left text-lg font-semibold">
                    Menu
                </SheetHeader>

                {status === "authenticated" && data?.user && (
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2 py-4">
                            <Avatar>
                                <AvatarFallback>
                                    {data.user.name?.[0].toUpperCase()}
                                </AvatarFallback>
                            
                                {data.user.image && <AvatarImage src={data.user.image}/>}
                                <div className="flex flex-col">
                                    <p className="font-medium">{data.user.name}</p>
                                    <p className="text-sm opacity-75">Boas compras!</p>
                                </div>
                            </Avatar>
                        </div>
                        <Separator/>
                    </div>
                )}

                <div className="mt-2 flex flex-col gap-3">
                    {status === "unauthenticated" && (
                    <Button
                        onClick={handleLoginClick}
                        variant="outline"
                        className="w-full justify-start gap-2"
                    >
                        <LogInIcon size={16} />
                        Fazer Login
                    </Button>
                    )}

                    {status === "authenticated" && (
                    <Button
                        onClick={handleLogoutClick}
                        variant="outline"
                        className="w-full justify-start gap-2"
                    >
                        <LogOutIcon size={16} />
                        Fazer Logout
                    </Button>
                    )}


                    <Button variant="outline" className="w-full justify-start gap-2">
                        <HomeIcon size={16}/>
                        Início
                    </Button>

                    <Button variant="outline" className="w-full justify-start gap-2">
                        <PercentIcon size={16} />
                        Ofertas
                    </Button>

                    <Button variant="outline" className="w-full justify-start gap-2">
                        <ListOrderedIcon size={16}/>
                        Catálogo
                    </Button>
                </div>
            </SheetContent>

        </Sheet>
        
        <h1 className="font-semibold text-lg"><span className="text-primary">NOME</span> Store</h1>

        <Button size="icon" variant="outline">
            <ShoppingCartIcon/>
        </Button>
        
    </Card>
}
export default Header;