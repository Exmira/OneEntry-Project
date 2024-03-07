import { clients } from "@/data/clients";
import Image from "next/image";
import React from "react";

export default function Clients() {
  return (
    <div className="client-area-1 overflow-hidden space">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <ul className="client-list-wrap">
              {clients.map((elm, i) => (
                <li key={i}>
                  <a href={elm.href}>
                    <span className="link-effect">
                      <span className="effect-1">
                        <Image
                          width={164}
                          height={45}
                          style={{
                            objectFit: "contain",
                            width: "162px",
                            height: "35px",
                          }}
                          src={elm.img}
                          alt="img"
                        />
                      </span>
                      <span className="effect-1">
                        <Image
                          width={164}
                          height={45}
                          style={{
                            objectFit: "contain",
                            width: "162px",
                            height: "35px",
                          }}
                          src={elm.img}
                          alt="img"
                        />
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
