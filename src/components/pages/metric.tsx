import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  Key,
} from "react";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";

const Metric = ({ data }: any) => {
  return (
    <section>
      <div className="container p-12 max-md:px-6 max-md:py-10">
        <h1 className="text-center text-3xl font-bold">Results & Metric</h1>
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-4 pt-12">
          {data?.map(
            (
              item: {
                title:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | null
                  | undefined;
                sub:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | null
                  | undefined;
                desc:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | null
                  | undefined;
              },
              index: Key | null | undefined
            ) => (
              <Card key={index} className="py-12 px-6">
                <CardTitle className="text-center text-5xl font-medium">
                  {item.title}
                </CardTitle>
                <CardContent className="text-center text-xl">
                  {item.sub}
                </CardContent>
                <CardDescription className="text-center text-xl text-[#6B6B6B]">
                  {item.desc}
                </CardDescription>
              </Card>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Metric;
