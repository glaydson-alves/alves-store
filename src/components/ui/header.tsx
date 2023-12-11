"use client"

import { HomeIcon, ListOrderedIcon, LogInIcon, MenuIcon, PercentIcon, ShoppingCartIcon } from "lucide-react";
import { Card } from "./card";
import { Button } from "./button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader } from "./sheet";
import { signIn } from "next-auth/react";

const Header = () => {
    const handleLoginClick = async () =>{
        await signIn();
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
                <div className="mt-2 flex flex-col gap-3">
                    <Button onClick={handleLoginClick} variant="outline" className="w-full justify-start gap-2">
                        <LogInIcon size={16} />
                        fazer Login
                    </Button>

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