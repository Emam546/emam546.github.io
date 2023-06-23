import { Data } from "@src/info";
import React, { createContext, useState } from "react";

// Create a new context
export type InitDataType = {
    info: Data["info"]["data"];
    websites: Data["links"]["data"];
    profile: string;
};
export const Context = createContext<InitDataType>({
    info: {
        email: "",
        imgUrl: "",
        address: "",
        city: "",
        country: "",
        firstName: "",
        jobTitle: "",
        lastName: "",
        nationality: "",
        phone: "",
        placeOfBirth: "",
        postalCode: "",
        availability: "",
    },
    websites: [],
    profile: "",
});
export function Provider({
    children,
    contextValue,
}: {
    children: React.ReactNode;
    contextValue: InitDataType;
}) {
    return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}
