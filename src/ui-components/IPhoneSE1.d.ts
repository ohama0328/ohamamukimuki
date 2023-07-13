/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Employee } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type IPhoneSE1OverridesProps = {
    IPhoneSE1?: PrimitiveOverrideProps<ViewProps>;
    "\u30AF\u30EC\u30FC\u30E0\u901A\u9054\u30A2\u30D7\u30EA"?: PrimitiveOverrideProps<TextProps>;
    "\u30ED\u30B0\u30A4\u30F3ID\u30E9\u30D9\u30EB"?: PrimitiveOverrideProps<TextProps>;
    "\u30D1\u30B9\u30EF\u30FC\u30C9\u30E9\u30D9\u30EB"?: PrimitiveOverrideProps<TextProps>;
    "\u30ED\u30B0\u30A4\u30F3\u30DC\u30BF\u30F3"?: PrimitiveOverrideProps<ViewProps>;
    "\u30ED\u30B0\u30A4\u30F3\u30DC\u30BF\u30F3\u56F3\u5F62"?: PrimitiveOverrideProps<ViewProps>;
    "\u30ED\u30B0\u30A4\u30F36316"?: PrimitiveOverrideProps<TextProps>;
    "\u30D1\u30B9"?: PrimitiveOverrideProps<ViewProps>;
    "\u30ED\u30B0\u30A4\u30F3ID\u5165\u529B\u6B04"?: PrimitiveOverrideProps<ViewProps>;
    "\u30D7\u30EC\u30FC\u30B9\u30DB\u30EB\u30C07311"?: PrimitiveOverrideProps<TextProps>;
    "\u30ED\u30B0\u30A4\u30F37312"?: PrimitiveOverrideProps<ViewProps>;
    "\u30D1\u30B9\u5165\u529B\u6B04"?: PrimitiveOverrideProps<ViewProps>;
    "\u30D7\u30EC\u30FC\u30B9\u30DB\u30EB\u30C07314"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type IPhoneSE1Props = React.PropsWithChildren<Partial<ViewProps> & {
    employee?: Employee;
} & {
    overrides?: IPhoneSE1OverridesProps | undefined | null;
}>;
export default function IPhoneSE1(props: IPhoneSE1Props): React.ReactElement;
