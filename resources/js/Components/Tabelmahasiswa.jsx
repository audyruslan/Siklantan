import { Inertia } from "@inertiajs/inertia";
import React, { useState } from "react";
import * as Bsikon from 'react-icons/bs';
import * as Faikon from 'react-icons/fa';
import * as BiIkon from 'react-icons/bi';
import axios from "axios";

export default function Tabelmahasiswa() {
    
    return (
        <div className="relative space-y-4">
            {
                <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-700 text-white">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                                            >
                                                Nama
                                            </th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}
