import React from "react";
import { TableDataGridProps } from "./TableDataGrid.tsx";

export interface PreconceptualSchemeProps {
    onOpenTable: (modalArgs: TableDataGridProps) => void;
    measureTechDebt: () => void;
}

export const PreconceptualScheme: React.FC<PreconceptualSchemeProps> = ({onOpenTable, measureTechDebt}) =>
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="1626px"
         height="1217px" viewBox="-0.5 -0.5 1626 1217"
         style={{backgroundColor: 'rgb(255, 255, 255)'}}>
        <defs/>
        <g>
            <path d="M 120 790 L 158.88 790" fill="none" stroke="rgb(0, 0, 0)" strokeMiterlimit={10}
                  pointerEvents="stroke"/>
            <path d="M 168.88 790 L 158.88 795 L 158.88 785 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 0 805 L 120 805 L 120 775 L 0 775 L 0 805" fill="#02b3ef" stroke="#000000" strokeMiterlimit={10}
                  pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '120px',
                            height: '1px',
                            paddingTop: '790px',
                            marginLeft: '0px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}
                                     className="class-concept large"
                                     onClick={() => onOpenTable({tableName: "ProjectManagementSoftware"})}
                                >Project Management Software
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 280 760 L 360 760 L 360 730 L 280 730 L 280 760" fill="#c1c0c4" stroke="#000000"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '80px',
                            height: '1px',
                            paddingTop: '745px',
                            marginLeft: '280px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>ID
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 280 805 L 360 805 L 360 775 L 280 775 L 280 805" fill="#c1c0c4" stroke="#000000"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '80px',
                            height: '1px',
                            paddingTop: '790px',
                            marginLeft: '280px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>Name
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 200 800 L 200 825 Q 200 835 210 835 L 268.88 835" fill="none" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 278.88 835 L 268.88 840 L 268.88 830 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 230 790 L 268.88 790" fill="none" stroke="rgb(0, 0, 0)" strokeMiterlimit={10}
                  pointerEvents="stroke"/>
            <path d="M 278.88 790 L 268.88 795 L 268.88 785 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 181.25 800 L 218.75 800 C 224.96 800 230 795.52 230 790 C 230 784.48 224.96 780 218.75 780 L 181.25 780 C 175.04 780 170 784.48 170 790 C 170 795.52 175.04 800 181.25 800"
                fill="#fdff02" stroke="#000000" strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '60px',
                            height: '1px',
                            paddingTop: '790px',
                            marginLeft: '170px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>Has
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 320 630 L 320 625 Q 320 620 320 610 L 320 597.12" fill="none" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 320 587.12 L 325 597.12 L 315 597.12 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 270 660 L 350 660 L 350 630 L 270 630 L 270 660" fill="#02b3ef" stroke="#000000"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '80px',
                            height: '1px',
                            paddingTop: '645px',
                            marginLeft: '270px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}
                                     className="class-concept"
                                     onClick={() => onOpenTable({tableName: "Sprint"})}
                                >Sprint
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 400 835 L 438.88 835" fill="none" stroke="rgb(0, 0, 0)" strokeMiterlimit={10}
                  pointerEvents="stroke"/>
            <path d="M 448.88 835 L 438.88 840 L 438.88 830 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 280 850 L 400 850 L 400 820 L 280 820 L 280 850" fill="#02b3ef" stroke="#000000"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '120px',
                            height: '1px',
                            paddingTop: '835px',
                            marginLeft: '280px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}
                                     className="class-concept large"
                                     onClick={() => onOpenTable({tableName: "SoftwareDevelopmentProject"})}
                                >Software Development Project
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 510 835 L 580 835 Q 590 835 590 825 L 590 805 Q 590 795 600 795 L 618.88 795" fill="none"
                  stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 628.88 795 L 618.88 800 L 618.88 790 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 510 835 L 618.88 835" fill="none" stroke="rgb(0, 0, 0)" strokeMiterlimit={10}
                  pointerEvents="stroke"/>
            <path d="M 628.88 835 L 618.88 840 L 618.88 830 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 480 845 L 480 885 Q 480 895 470 895 L 440 895 Q 430 895 430 905 L 430 923.88" fill="none"
                  stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 430 933.88 L 425 923.88 L 435 923.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 480 845 L 480 885 Q 480 895 490 895 L 520 895 Q 530 895 530 905 L 530 923.88" fill="none"
                  stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 530 933.88 L 525 923.88 L 535 923.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 461.25 845 L 498.75 845 C 504.96 845 510 840.52 510 835 C 510 829.48 504.96 825 498.75 825 L 461.25 825 C 455.04 825 450 829.48 450 835 C 450 840.52 455.04 845 461.25 845"
                fill="#fdff02" stroke="#000000" strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '60px',
                            height: '1px',
                            paddingTop: '835px',
                            marginLeft: '450px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>Has
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 630 811 L 710 811 L 710 781 L 630 781 L 630 811" fill="#c1c0c4" stroke="#000000"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '80px',
                            height: '1px',
                            paddingTop: '796px',
                            marginLeft: '630px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>ID
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 630 850 L 710 850 L 710 820 L 630 820 L 630 850" fill="#c1c0c4" stroke="#000000"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '80px',
                            height: '1px',
                            paddingTop: '835px',
                            marginLeft: '630px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>Deadline
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 430 965 L 430 975 Q 430 985 430 982.5 L 430 981.25 Q 430 980 430 984.44 L 430 988.88" fill="none"
                  stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 430 998.88 L 425 988.88 L 435 988.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 390 965 L 470 965 L 470 935 L 390 935 L 390 965" fill="#02b3ef" stroke="#000000"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '80px',
                            height: '1px',
                            paddingTop: '950px',
                            marginLeft: '390px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}
                                     className="class-concept"
                                     onClick={() => onOpenTable({tableName: "DevelopmentTeam"})}
                                >Development team
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 490 965 L 570 965 L 570 935 L 490 935 L 490 965" fill="#02b3ef" stroke="#000000"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '80px',
                            height: '1px',
                            paddingTop: '950px',
                            marginLeft: '490px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}
                                     className="class-concept"
                                     onClick={() => onOpenTable({tableName: "Application"})}
                                >Application
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 430 1020 L 430 1025 Q 430 1030 440 1030 L 460 1030 Q 470 1030 470 1036.94 L 470 1043.88"
                  fill="none" stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 470 1053.88 L 465 1043.88 L 475 1043.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 411.25 1020 L 448.75 1020 C 454.96 1020 460 1015.52 460 1010 C 460 1004.48 454.96 1000 448.75 1000 L 411.25 1000 C 405.04 1000 400 1004.48 400 1010 C 400 1015.52 405.04 1020 411.25 1020"
                fill="#fdff02" stroke="#000000" strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '60px',
                            height: '1px',
                            paddingTop: '1010px',
                            marginLeft: '400px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>Has
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 450 1085 L 450 1092.5 Q 450 1100 450 1104.44 L 450 1108.88" fill="none" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 450 1118.88 L 445 1108.88 L 455 1108.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 440 1085 L 520 1085 L 520 1055 L 440 1055 L 440 1085" fill="#02b3ef" stroke="#000000"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '80px',
                            height: '1px',
                            paddingTop: '1070px',
                            marginLeft: '440px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}
                                     className="class-concept"
                                     onClick={() => onOpenTable({tableName: "Member"})}
                                >Member
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 440 1140 L 440 1165 Q 440 1175 430 1175 L 401.12 1175" fill="none" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 391.12 1175 L 401.12 1170 L 401.12 1180 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 420 1130 L 410 1130 Q 400 1130 405 1130 L 407.5 1130 Q 410 1130 405.56 1130 L 401.12 1130"
                  fill="none" stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 391.12 1130 L 401.12 1125 L 401.12 1135 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 450 1140 L 450 1191 Q 450 1201 440 1201 L 401.12 1201" fill="none" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 391.12 1201 L 401.12 1196 L 401.12 1206 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 431.25 1140 L 468.75 1140 C 474.96 1140 480 1135.52 480 1130 C 480 1124.48 474.96 1120 468.75 1120 L 431.25 1120 C 425.04 1120 420 1124.48 420 1130 C 420 1135.52 425.04 1140 431.25 1140"
                fill="#fdff02" stroke="#000000" strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '60px',
                            height: '1px',
                            paddingTop: '1130px',
                            marginLeft: '420px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>Has
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 310 1145 L 390 1145 L 390 1115 L 310 1115 L 310 1145" fill="#c1c0c4" stroke="#000000"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '80px',
                            height: '1px',
                            paddingTop: '1130px',
                            marginLeft: '310px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>ID
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 310 1180 L 390 1180 L 390 1150 L 310 1150 L 310 1180" fill="#c1c0c4" stroke="#000000"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '80px',
                            height: '1px',
                            paddingTop: '1165px',
                            marginLeft: '310px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>Role
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 310 1216 L 390 1216 L 390 1186 L 310 1186 L 310 1216" fill="#c1c0c4" stroke="#000000"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '80px',
                            height: '1px',
                            paddingTop: '1201px',
                            marginLeft: '310px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>Name
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 660 960 L 660 980 Q 660 990 660 999.44 L 660 1008.88" fill="none" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 660 1018.88 L 655 1008.88 L 665 1008.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 631.25 960 L 668.75 960 C 674.96 960 680 955.52 680 950 C 680 944.48 674.96 940 668.75 940 L 631.25 940 C 625.04 940 620 944.48 620 950 C 620 955.52 625.04 960 631.25 960"
                fill="#fdff02" stroke="#000000" strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '60px',
                            height: '1px',
                            paddingTop: '950px',
                            marginLeft: '620px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>Has
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 530 1055 L 610 1055 L 610 1025 L 530 1025 L 530 1055" fill="#c1c0c4" stroke="#000000"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '80px',
                            height: '1px',
                            paddingTop: '1040px',
                            marginLeft: '530px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>ID
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 760 965 L 760 975 Q 760 985 760 982.5 L 760 981.25 Q 760 980 760 984.44 L 760 988.88" fill="none"
                  stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 760 998.88 L 755 988.88 L 765 988.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 800 950 L 838.88 950" fill="none" stroke="rgb(0, 0, 0)" strokeMiterlimit={10}
                  pointerEvents="stroke"/>
            <path d="M 848.88 950 L 838.88 955 L 838.88 945 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 720 965 L 800 965 L 800 935 L 720 935 L 720 965" fill="#02b3ef" stroke="#000000"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '80px',
                            height: '1px',
                            paddingTop: '950px',
                            marginLeft: '720px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}
                                     className="class-concept"
                                     onClick={() => onOpenTable({tableName: "Release"})}
                                >Release
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 760 1020 L 760 1030 Q 760 1040 760 1037.5 L 760 1036.25 Q 760 1035 760 1039.44 L 760 1043.88"
                  fill="none" stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 760 1053.88 L 755 1043.88 L 765 1043.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 741.25 1020 L 778.75 1020 C 784.96 1020 790 1015.52 790 1010 C 790 1004.48 784.96 1000 778.75 1000 L 741.25 1000 C 735.04 1000 730 1004.48 730 1010 C 730 1015.52 735.04 1020 741.25 1020"
                fill="#fdff02" stroke="#000000" strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '60px',
                            height: '1px',
                            paddingTop: '1010px',
                            marginLeft: '730px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>Has
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 720 1085 L 800 1085 L 800 1055 L 720 1055 L 720 1085" fill="#c1c0c4" stroke="#000000"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '80px',
                            height: '1px',
                            paddingTop: '1070px',
                            marginLeft: '720px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>Version number
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 910 950 L 958.88 950" fill="none" stroke="rgb(0, 0, 0)" strokeMiterlimit={10}
                  pointerEvents="stroke"/>
            <path d="M 968.88 950 L 958.88 955 L 958.88 945 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 861.25 960 L 898.75 960 C 904.96 960 910 955.52 910 950 C 910 944.48 904.96 940 898.75 940 L 861.25 940 C 855.04 940 850 944.48 850 950 C 850 955.52 855.04 960 861.25 960"
                fill="#fdff02" stroke="#000000" strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '60px',
                            height: '1px',
                            paddingTop: '950px',
                            marginLeft: '850px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>Has
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 1010 965 L 1010 975 Q 1010 985 1010 982.5 L 1010 981.25 Q 1010 980 1010 984.44 L 1010 988.88"
                  fill="none" stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 1010 998.88 L 1005 988.88 L 1015 988.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 991.25 1020 L 1028.75 1020 C 1034.96 1020 1040 1015.52 1040 1010 C 1040 1004.48 1034.96 1000 1028.75 1000 L 991.25 1000 C 985.04 1000 980 1004.48 980 1010 C 980 1015.52 985.04 1020 991.25 1020"
                fill="#fdff02" stroke="#000000" strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '60px',
                            height: '1px',
                            paddingTop: '1010px',
                            marginLeft: '980px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>Has
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 820 1085 L 900 1085 L 900 1055 L 820 1055 L 820 1085" fill="#c1c0c4" stroke="#000000"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '80px',
                            height: '1px',
                            paddingTop: '1070px',
                            marginLeft: '820px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>ID
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 570 950 L 608.88 950" fill="none" stroke="rgb(0, 0, 0)" strokeMiterlimit={10}
                  pointerEvents="stroke"/>
            <path d="M 618.88 950 L 608.88 955 L 608.88 945 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 640 960 L 640 980 Q 640 990 630 990 L 580 990 Q 570 990 570 1000 L 570 1013.88" fill="none"
                  stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 570 1023.88 L 565 1013.88 L 575 1013.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 970 965 L 1050 965 L 1050 935 L 970 935 L 970 965" fill="#92d050" stroke="#000000"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '80px',
                            height: '1px',
                            paddingTop: '950px',
                            marginLeft: '970px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}
                                     className="class-concept"
                                     onClick={() => onOpenTable({tableName: "Defect"})}
                                >Defect
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 920 1085 L 1000 1085 L 1000 1055 L 920 1055 L 920 1085" fill="#c1c0c4" stroke="#000000"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '80px',
                            height: '1px',
                            paddingTop: '1070px',
                            marginLeft: '920px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>Ocurrence date
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 340 1085 L 420 1085 L 420 1055 L 340 1055 L 340 1085" fill="#c1c0c4" stroke="#000000"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '80px',
                            height: '1px',
                            paddingTop: '1070px',
                            marginLeft: '340px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>ID
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 430 1020 L 430 1025 Q 430 1030 420 1030 L 400 1030 Q 390 1030 390 1036.94 L 390 1043.88"
                  fill="none" stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 390 1053.88 L 385 1043.88 L 395 1043.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 1020 1085 L 1100 1085 L 1100 1055 L 1020 1055 L 1020 1085" fill="#c1c0c4" stroke="#000000"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '80px',
                            height: '1px',
                            paddingTop: '1070px',
                            marginLeft: '1020px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>Description
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 980 1010 L 870 1010 Q 860 1010 860 1020 L 860 1043.88" fill="none" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 860 1053.88 L 855 1043.88 L 865 1043.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 1010 1020 L 1010 1025 Q 1010 1030 1000 1030 L 970 1030 Q 960 1030 960 1036.94 L 960 1043.88"
                  fill="none" stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 960 1053.88 L 955 1043.88 L 965 1043.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 1010 1020 L 1010 1025 Q 1010 1030 1020 1030 L 1050 1030 Q 1060 1030 1060 1036.94 L 1060 1043.88"
                  fill="none" stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 1060 1053.88 L 1055 1043.88 L 1065 1043.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 480 669 L 480 679 Q 480 689 480 687 L 480 686 Q 480 685 480 689.44 L 480 693.88" fill="none"
                  stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 480 703.88 L 475 693.88 L 485 693.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 440 669 L 520 669 L 520 639 L 440 639 L 440 669" fill="#02b3ef" stroke="#000000"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '80px',
                            height: '1px',
                            paddingTop: '654px',
                            marginLeft: '440px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}
                                     className="class-concept"
                                     onClick={() => onOpenTable({tableName: "QualityAssuranceTool"})}
                                >Quality Assurance Tool
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 480 725 L 480 737.57 Q 480 747.57 490 747.57 L 515 747.57 Q 525 747.57 525 753.23 L 525 758.88"
                  fill="none" stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 525 768.88 L 520 758.88 L 530 758.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 450 715 L 390 715 Q 380 715 380 725 L 380 808.88" fill="none" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 380 818.88 L 375 808.88 L 385 808.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 510 715 L 548.88 715" fill="none" stroke="rgb(0, 0, 0)" strokeMiterlimit={10}
                  pointerEvents="stroke"/>
            <path d="M 558.88 715 L 548.88 720 L 548.88 710 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 480 725 L 480 737.57 Q 480 747.57 470 747.57 L 445 747.57 Q 435 747.57 435 753.23 L 435 758.88"
                  fill="none" stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 435 768.88 L 430 758.88 L 440 758.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 461.25 725 L 498.75 725 C 504.96 725 510 720.52 510 715 C 510 709.48 504.96 705 498.75 705 L 461.25 705 C 455.04 705 450 709.48 450 715 C 450 720.52 455.04 725 461.25 725"
                fill="#fdff02" stroke="#000000" strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '60px',
                            height: '1px',
                            paddingTop: '715px',
                            marginLeft: '450px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>Has
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 485 800 L 565 800 L 565 770 L 485 770 L 485 800" fill="#c1c0c4" stroke="#000000"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '80px',
                            height: '1px',
                            paddingTop: '785px',
                            marginLeft: '485px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>Tool Name
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 640 715 L 678.88 715" fill="none" stroke="rgb(0, 0, 0)" strokeMiterlimit={10}
                  pointerEvents="stroke"/>
            <path d="M 688.88 715 L 678.88 720 L 678.88 710 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 560 730 L 640 730 L 640 700 L 560 700 L 560 730" fill="#02b3ef" stroke="#000000"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '80px',
                            height: '1px',
                            paddingTop: '715px',
                            marginLeft: '560px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}
                                     className="class-concept"
                                     onClick={() => onOpenTable({tableName: "QualityRule"})}
                                >Quality Rule
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 720 705 L 720 685 Q 720 675 710 675 L 610 675 Q 600 675 600 665 L 600 641.12" fill="none"
                  stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 600 631.12 L 605 641.12 L 595 641.12 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 720 705 L 720 685 Q 720 675 710 675 L 700 675 Q 690 675 690 665 L 690 641.12" fill="none"
                  stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 690 631.12 L 695 641.12 L 685 641.12 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 720 705 L 720 685 Q 720 675 730 675 L 770 675 Q 780 675 780 665 L 780 641.12" fill="none"
                  stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 780 631.12 L 785 641.12 L 775 641.12 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 720 705 L 720 685 Q 720 675 730 675 L 860 675 Q 870 675 870 665 L 870 641.12" fill="none"
                  stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 870 631.12 L 875 641.12 L 865 641.12 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 720 705 L 720 685 Q 720 675 730 675 L 950 675 Q 960 675 960 665 L 960 641.12" fill="none"
                  stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 960 631.12 L 965 641.12 L 955 641.12 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 750 715 L 1130 715 Q 1140 715 1140 705 L 1140 641.12" fill="none" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 1140 631.12 L 1145 641.12 L 1135 641.12 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 720 705 L 720 685 Q 720 675 730 675 L 1040 675 Q 1050 675 1050 665 L 1050 641.12" fill="none"
                  stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 1050 631.12 L 1055 641.12 L 1045 641.12 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 701.25 725 L 738.75 725 C 744.96 725 750 720.52 750 715 C 750 709.48 744.96 705 738.75 705 L 701.25 705 C 695.04 705 690 709.48 690 715 C 690 720.52 695.04 725 701.25 725"
                fill="#fdff02" stroke="#000000" strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '60px',
                            height: '1px',
                            paddingTop: '715px',
                            marginLeft: '690px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>Has
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 560 630 L 640 630 L 640 600 L 560 600 L 560 630" fill="#c1c0c4" stroke="#000000"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '80px',
                            height: '1px',
                            paddingTop: '615px',
                            marginLeft: '560px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>Name
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 650 630 L 730 630 L 730 600 L 650 600 L 650 630" fill="#c1c0c4" stroke="#000000"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '80px',
                            height: '1px',
                            paddingTop: '615px',
                            marginLeft: '650px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>Compliance
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 740 630 L 820 630 L 820 600 L 740 600 L 740 630" fill="#c1c0c4" stroke="#000000"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '80px',
                            height: '1px',
                            paddingTop: '615px',
                            marginLeft: '740px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>Rule type
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 830 630 L 910 630 L 910 600 L 830 600 L 830 630" fill="#c1c0c4" stroke="#000000"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '80px',
                            height: '1px',
                            paddingTop: '615px',
                            marginLeft: '830px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>Interest
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 920 630 L 1000 630 L 1000 600 L 920 600 L 920 630" fill="#c1c0c4" stroke="#000000"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '80px',
                            height: '1px',
                            paddingTop: '615px',
                            marginLeft: '920px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>Principal
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 1180 615 L 1208.88 615" fill="none" stroke="rgb(0, 0, 0)" strokeMiterlimit={10}
                  pointerEvents="stroke"/>
            <path d="M 1218.88 615 L 1208.88 620 L 1208.88 610 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 1100 630 L 1180 630 L 1180 600 L 1100 600 L 1100 630" fill="#92d050" stroke="#000000"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '80px',
                            height: '1px',
                            paddingTop: '615px',
                            marginLeft: '1100px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}
                                     className="class-concept"
                                     onClick={() => onOpenTable({tableName: "Violation"})}
                                >Violation
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 1240 625 L 1240 632.5 Q 1240 640 1230 640 L 1200 640 Q 1190 640 1190 644.44 L 1190 648.88"
                  fill="none" stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 1190 658.88 L 1185 648.88 L 1195 648.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 1250 625 L 1250 880 Q 1250 890 1240 890 L 1020 890 Q 1010 890 1010 900 L 1010 923.88" fill="none"
                  stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 1010 933.88 L 1005 923.88 L 1015 923.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 1231.25 625 L 1268.75 625 C 1274.96 625 1280 620.52 1280 615 C 1280 609.48 1274.96 605 1268.75 605 L 1231.25 605 C 1225.04 605 1220 609.48 1220 615 C 1220 620.52 1225.04 625 1231.25 625"
                fill="#fdff02" stroke="#000000" strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '60px',
                            height: '1px',
                            paddingTop: '615px',
                            marginLeft: '1220px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>Has
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 1150 690 L 1230 690 L 1230 660 L 1150 660 L 1150 690" fill="#c1c0c4" stroke="#000000"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '80px',
                            height: '1px',
                            paddingTop: '675px',
                            marginLeft: '1150px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>ID
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 1050 485 L 1050 495 Q 1050 505 1050 498 L 1050 494.5 Q 1050 491 1050 495.44 L 1050 499.88"
                  fill="none" stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 1050 509.88 L 1045 499.88 L 1055 499.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 1010 485 L 1090 485 L 1090 455 L 1010 455 L 1010 485" fill="#02b3ef" stroke="#000000"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '80px',
                            height: '1px',
                            paddingTop: '470px',
                            marginLeft: '1010px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}
                                     className="class-concept"
                                     onClick={() => onOpenTable({tableName: "Code"})}
                                >Code
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 1070 531 L 1070 550 Q 1070 560 1080 560 L 1110 560 Q 1120 560 1120 570 L 1120 588.88" fill="none"
                  stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 1120 598.88 L 1115 588.88 L 1125 588.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 710 870 C 710 881.05 718.95 890 730 890 C 741.05 890 750 881.05 750 870 C 750 858.95 741.05 850 730 850 C 718.95 850 710 858.95 710 870"
                fill="#ffffff" stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '38px',
                            height: '1px',
                            paddingTop: '870px',
                            marginLeft: '711px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>1
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 1080 520 L 1090 520 Q 1100 520 1100 510 L 1100 490 Q 1100 480 1110 480 L 1188.88 480" fill="none"
                  stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 1198.88 480 L 1188.88 485 L 1188.88 475 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 1080 520 L 1130 520 Q 1140 520 1140 517.5 L 1140 516.25 Q 1140 515 1150 515 L 1188.88 515"
                  fill="none" stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 1198.88 515 L 1188.88 520 L 1188.88 510 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 1080 520 L 1090 520 Q 1100 520 1100 530 L 1100 541 Q 1100 551 1110 551 L 1188.88 551" fill="none"
                  stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 1198.88 551 L 1188.88 556 L 1188.88 546 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 1031.25 531 L 1068.75 531 C 1074.96 531 1080 526.52 1080 521 C 1080 515.48 1074.96 511 1068.75 511 L 1031.25 511 C 1025.04 511 1020 515.48 1020 521 C 1020 526.52 1025.04 531 1031.25 531"
                fill="#fdff02" stroke="#000000" strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '60px',
                            height: '1px',
                            paddingTop: '521px',
                            marginLeft: '1020px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>Has
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 1200 494 L 1280 494 L 1280 464 L 1200 464 L 1200 494" fill="#c1c0c4" stroke="#000000"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '80px',
                            height: '1px',
                            paddingTop: '479px',
                            marginLeft: '1200px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>ID
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 1200 530 L 1280 530 L 1280 500 L 1200 500 L 1200 530" fill="#c1c0c4" stroke="#000000"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '80px',
                            height: '1px',
                            paddingTop: '515px',
                            marginLeft: '1200px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>Total Lines of Code (LOC)
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 1200 566 L 1280 566 L 1280 536 L 1200 536 L 1200 566" fill="#c1c0c4" stroke="#000000"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '80px',
                            height: '1px',
                            paddingTop: '551px',
                            marginLeft: '1200px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>Technical Debt
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 880 435 L 841.12 435" fill="none" stroke="rgb(0, 0, 0)" strokeMiterlimit={10}
                  pointerEvents="stroke"/>
            <path d="M 831.12 435 L 841.12 430 L 841.12 440 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 1020 576 C 1020 587.05 1028.95 596 1040 596 C 1051.05 596 1060 587.05 1060 576 C 1060 564.95 1051.05 556 1040 556 C 1028.95 556 1020 564.95 1020 576"
                fill="#ffffff" stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '38px',
                            height: '1px',
                            paddingTop: '576px',
                            marginLeft: '1021px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>1
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 880 450 L 960 450 L 960 420 L 880 420 L 880 450" fill="#02b3ef" stroke="#000000"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '80px',
                            height: '1px',
                            paddingTop: '435px',
                            marginLeft: '880px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}
                                     className="class-concept"
                                     onClick={() => onOpenTable({tableName: "Feature"})}
                                >Feature
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 730 890 L 730 910 Q 730 920 730 921.94 L 730 923.88" fill="none" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 730 933.88 L 725 923.88 L 735 923.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 800 425 L 800 417.5 Q 800 410 790 410 L 710 410 Q 700 410 700 405.56 L 700 401.12" fill="none"
                  stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 700 391.12 L 705 401.12 L 695 401.12 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 1020 515 L 930 515 Q 920 515 920 505 L 920 461.12" fill="none" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 920 451.12 L 925 461.12 L 915 461.12 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 800 425 L 800 415 Q 800 405 800 407.5 L 800 408.75 Q 800 410 800 405.56 L 800 401.12" fill="none"
                  stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 800 391.12 L 805 401.12 L 795 401.12 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 770 435 L 651.12 435" fill="none" stroke="rgb(0, 0, 0)" strokeMiterlimit={10}
                  pointerEvents="stroke"/>
            <path d="M 641.12 435 L 651.12 430 L 651.12 440 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 800 425 L 800 417.5 Q 800 410 810 410 L 890 410 Q 900 410 900 405.56 L 900 401.12" fill="none"
                  stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 900 391.12 L 905 401.12 L 895 401.12 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 781.25 445 L 818.75 445 C 824.96 445 830 440.52 830 435 C 830 429.48 824.96 425 818.75 425 L 781.25 425 C 775.04 425 770 429.48 770 435 C 770 440.52 775.04 445 781.25 445"
                fill="#fdff02" stroke="#000000" strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '60px',
                            height: '1px',
                            paddingTop: '435px',
                            marginLeft: '770px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>Has
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 1040 531 L 1040 535.5 Q 1040 540 1040 542.44 L 1040 544.88" fill="none" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 1040 554.88 L 1035 544.88 L 1045 544.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 660 390 L 740 390 L 740 360 L 660 360 L 660 390" fill="#c1c0c4" stroke="#000000"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '80px',
                            height: '1px',
                            paddingTop: '375px',
                            marginLeft: '660px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>ID
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 760 390 L 840 390 L 840 360 L 760 360 L 760 390" fill="#c1c0c4" stroke="#000000"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '80px',
                            height: '1px',
                            paddingTop: '375px',
                            marginLeft: '760px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>Description
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 569.76 419.13 L 569.83 396.64" fill="none" stroke="rgb(0, 0, 0)" strokeMiterlimit={10}
                  pointerEvents="stroke"/>
            <path d="M 569.86 386.64 L 574.83 396.65 L 564.83 396.62 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 560 450 L 640 450 L 640 420 L 560 420 L 560 450" fill="#02b3ef" stroke="#000000"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '80px',
                            height: '1px',
                            paddingTop: '435px',
                            marginLeft: '560px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}
                                     className="class-concept"
                                     onClick={() => onOpenTable({tableName: "Ticket"})}
                                >Ticket
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 400 305 L 395 305 Q 390 305 380 305 L 361.12 305" fill="none" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 351.12 305 L 361.12 300 L 361.12 310 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 400 312 L 480 312 L 480 282 L 400 282 L 400 312" fill="#02b3ef" stroke="#000000"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '80px',
                            height: '1px',
                            paddingTop: '297px',
                            marginLeft: '400px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}
                                     className="class-concept"
                                     onClick={() => onOpenTable({tableName: "Commit"})}
                                >Commit
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 550 375 L 545 375 Q 540 375 540 365 L 540 310 Q 540 300 530 300 L 491.12 300" fill="none"
                  stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 481.12 300 L 491.12 295 L 491.12 305 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 550 375 L 545 375 Q 540 375 540 365 L 540 345 Q 540 335 530 335 L 491.12 335" fill="none"
                  stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 481.12 335 L 491.12 330 L 491.12 340 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 550 375 L 491.12 375" fill="none" stroke="rgb(0, 0, 0)" strokeMiterlimit={10}
                  pointerEvents="stroke"/>
            <path d="M 481.12 375 L 491.12 370 L 491.12 380 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 550 375 L 545 375 Q 540 375 540 385 L 540 405 Q 540 415 530 415 L 491.12 415" fill="none"
                  stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 481.12 415 L 491.12 410 L 491.12 420 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 550 375 L 545 375 Q 540 375 540 385 L 540 445 Q 540 455 530 455 L 491.12 455" fill="none"
                  stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 481.12 455 L 491.12 450 L 491.12 460 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 550 375 L 545 375 Q 540 375 540 385 L 540 484 Q 540 494 530 494 L 491.12 494" fill="none"
                  stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 481.12 494 L 491.12 489 L 491.12 499 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 561.25 385 L 598.75 385 C 604.96 385 610 380.52 610 375 C 610 369.48 604.96 365 598.75 365 L 561.25 365 C 555.04 365 550 369.48 550 375 C 550 380.52 555.04 385 561.25 385"
                fill="#fdff02" stroke="#000000" strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '60px',
                            height: '1px',
                            paddingTop: '375px',
                            marginLeft: '550px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>Has
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 400 351 L 480 351 L 480 321 L 400 321 L 400 351" fill="#c1c0c4" stroke="#000000"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '80px',
                            height: '1px',
                            paddingTop: '336px',
                            marginLeft: '400px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>Key
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 400 390 L 480 390 L 480 360 L 400 360 L 400 390" fill="#c1c0c4" stroke="#000000"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '80px',
                            height: '1px',
                            paddingTop: '375px',
                            marginLeft: '400px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>Definition of Done
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 400 430 L 480 430 L 480 400 L 400 400 L 400 430" fill="#c1c0c4" stroke="#000000"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '80px',
                            height: '1px',
                            paddingTop: '415px',
                            marginLeft: '400px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>Title
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 400 470 L 480 470 L 480 440 L 400 440 L 400 470" fill="#c1c0c4" stroke="#000000"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '80px',
                            height: '1px',
                            paddingTop: '455px',
                            marginLeft: '400px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>Points
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 400 509 L 480 509 L 480 479 L 400 479 L 400 509" fill="#c1c0c4" stroke="#000000"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '80px',
                            height: '1px',
                            paddingTop: '494px',
                            marginLeft: '400px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>Asignee
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 320 295 L 320 285 Q 320 275 310 275 L 251.12 275" fill="none" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 241.12 275 L 251.12 270 L 251.12 280 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 320 315 L 320 325 Q 320 335 310 335 L 251.12 335" fill="none" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 241.12 335 L 251.12 330 L 251.12 340 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 301.25 315 L 338.75 315 C 344.96 315 350 310.52 350 305 C 350 299.48 344.96 295 338.75 295 L 301.25 295 C 295.04 295 290 299.48 290 305 C 290 310.52 295.04 315 301.25 315"
                fill="#fdff02" stroke="#000000" strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '60px',
                            height: '1px',
                            paddingTop: '305px',
                            marginLeft: '290px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>Has
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 160 290 L 240 290 L 240 260 L 160 260 L 160 290" fill="#c1c0c4" stroke="#000000"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '80px',
                            height: '1px',
                            paddingTop: '275px',
                            marginLeft: '160px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>Hash
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 160 350 L 240 350 L 240 320 L 160 320 L 160 350" fill="#c1c0c4" stroke="#000000"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '80px',
                            height: '1px',
                            paddingTop: '335px',
                            marginLeft: '160px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>Message
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 320 566 L 320 520.12" fill="none" stroke="rgb(0, 0, 0)" strokeMiterlimit={10}
                  pointerEvents="stroke"/>
            <path d="M 320 510.12 L 325 520.12 L 315 520.12 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 350 576 L 590 576 Q 600 576 600 566 L 600 461.12" fill="none" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 600 451.12 L 605 461.12 L 595 461.12 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 290 576 L 220 576 Q 210 576 210 566 L 210 521.12" fill="none" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 210 511.12 L 215 521.12 L 205 521.12 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 301.25 586 L 338.75 586 C 344.96 586 350 581.52 350 576 C 350 570.48 344.96 566 338.75 566 L 301.25 566 C 295.04 566 290 570.48 290 576 C 290 581.52 295.04 586 301.25 586"
                fill="#fdff02" stroke="#000000" strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '60px',
                            height: '1px',
                            paddingTop: '576px',
                            marginLeft: '290px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>Has
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 200 780 L 200 655 Q 200 645 210 645 L 258.88 645" fill="none" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 268.88 645 L 258.88 650 L 258.88 640 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 280 509 L 360 509 L 360 479 L 280 479 L 280 509" fill="#c1c0c4" stroke="#000000"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '80px',
                            height: '1px',
                            paddingTop: '494px',
                            marginLeft: '280px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>Sprint Number
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 230 790 L 235 790 Q 240 790 240 780 L 240 755 Q 240 745 250 745 L 268.88 745" fill="none"
                  stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 278.88 745 L 268.88 750 L 268.88 740 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 640 895 L 570 895 Q 560 895 560 905 L 560 923.88" fill="none" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 560 933.88 L 555 923.88 L 565 923.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 640 895 C 640 906.05 648.95 915 660 915 C 671.05 915 680 906.05 680 895 C 680 883.95 671.05 875 660 875 C 648.95 875 640 883.95 640 895"
                fill="#ffffff" stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '38px',
                            height: '1px',
                            paddingTop: '895px',
                            marginLeft: '641px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>2
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 610 110 L 610 120 Q 610 130 610 127.5 L 610 126.25 Q 610 125 610 129.44 L 610 133.88" fill="none"
                  stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 610 143.88 L 605 133.88 L 615 133.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 570 110 L 650 110 L 650 80 L 570 80 L 570 110" fill="#02b3ef" stroke="#000000"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '80px',
                            height: '1px',
                            paddingTop: '95px',
                            marginLeft: '570px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}
                                     className="class-concept"
                                     onClick={() => onOpenTable({tableName: "VersionControlSystem"})}
                                >Version Control System
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 610 165 L 610 170 Q 610 175 600 175 L 570 175 Q 560 175 560 181.94 L 560 188.88" fill="none"
                  stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 560 198.88 L 555 188.88 L 565 188.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 610 165 L 610 170 Q 610 175 620 175 L 650 175 Q 660 175 660 181.94 L 660 188.88" fill="none"
                  stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 660 198.88 L 655 188.88 L 665 188.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 580 155 L 491.12 155" fill="none" stroke="rgb(0, 0, 0)" strokeMiterlimit={10}
                  pointerEvents="stroke"/>
            <path d="M 481.12 155 L 491.12 150 L 491.12 160 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 590 145 L 590 137.5 Q 590 130 580 130 L 520 130 Q 510 130 510 120 L 510 108.62" fill="none"
                  stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 510 98.62 L 515 108.62 L 505 108.62 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 591.25 165 L 628.75 165 C 634.96 165 640 160.52 640 155 C 640 149.48 634.96 145 628.75 145 L 591.25 145 C 585.04 145 580 149.48 580 155 C 580 160.52 585.04 165 591.25 165"
                fill="#fdff02" stroke="#000000" strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '60px',
                            height: '1px',
                            paddingTop: '155px',
                            marginLeft: '580px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>Has
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 520 230 L 600 230 L 600 200 L 520 200 L 520 230" fill="#c1c0c4" stroke="#000000"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '80px',
                            height: '1px',
                            paddingTop: '215px',
                            marginLeft: '520px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>ID
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 620 230 L 700 230 L 700 200 L 620 200 L 620 230" fill="#c1c0c4" stroke="#000000"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '80px',
                            height: '1px',
                            paddingTop: '215px',
                            marginLeft: '620px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>Name
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 440 170 L 440 198.88" fill="none" stroke="rgb(0, 0, 0)" strokeMiterlimit={10}
                  pointerEvents="stroke"/>
            <path d="M 440 208.88 L 435 198.88 L 445 198.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 400 170 L 480 170 L 480 140 L 400 140 L 400 170" fill="#02b3ef" stroke="#000000"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '80px',
                            height: '1px',
                            paddingTop: '155px',
                            marginLeft: '400px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}
                                     className="class-concept"
                                     onClick={() => onOpenTable({tableName: "Repository"})}
                                >Repository
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path
                d="M 490 77.5 C 490 88.55 498.95 97.5 510 97.5 C 521.05 97.5 530 88.55 530 77.5 C 530 66.45 521.05 57.5 510 57.5 C 498.95 57.5 490 66.45 490 77.5"
                fill="#ffffff" stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '38px',
                            height: '1px',
                            paddingTop: '78px',
                            marginLeft: '491px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>2
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 440 230 L 440 270.88" fill="none" stroke="rgb(0, 0, 0)" strokeMiterlimit={10}
                  pointerEvents="stroke"/>
            <path d="M 440 280.88 L 435 270.88 L 445 270.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 420 210 L 420 200 Q 420 190 410 190 L 340 190 Q 330 190 330 180 L 330 146.12" fill="none"
                  stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 330 136.12 L 335 146.12 L 325 146.12 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 421.25 230 L 458.75 230 C 464.96 230 470 225.52 470 220 C 470 214.48 464.96 210 458.75 210 L 421.25 210 C 415.04 210 410 214.48 410 220 C 410 225.52 415.04 230 421.25 230"
                fill="#fdff02" stroke="#000000" strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '60px',
                            height: '1px',
                            paddingTop: '220px',
                            marginLeft: '410px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>Has
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 290 135 L 370 135 L 370 105 L 290 105 L 290 135" fill="#c1c0c4" stroke="#000000"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '80px',
                            height: '1px',
                            paddingTop: '120px',
                            marginLeft: '290px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>ID
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 170 510 L 250 510 L 250 480 L 170 480 L 170 510" fill="#c1c0c4" stroke="#000000"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '80px',
                            height: '1px',
                            paddingTop: '495px',
                            marginLeft: '170px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>Duration
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 5 512.75 L 115 512.75 L 115 475.25 L 5 475.25 L 5 512.75" fill="#ffffff" stroke="rgb(0, 0, 0)"
                  strokeWidth={2} strokeMiterlimit={10} strokeDasharray="6 6" pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '108px',
                            height: '1px',
                            paddingTop: '494px',
                            marginLeft: '6px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '12px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>2 Weeks
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 170 494.73 L 115 494.37" fill="none" stroke="rgb(0, 0, 0)" strokeMiterlimit={10}
                  strokeDasharray="3 3" pointerEvents="stroke"/>
            <path
                d="M 640 1040 C 640 1051.05 648.95 1060 660 1060 C 671.05 1060 680 1051.05 680 1040 C 680 1028.95 671.05 1020 660 1020 C 648.95 1020 640 1028.95 640 1040"
                fill="#ffffff" stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '38px',
                            height: '1px',
                            paddingTop: '1040px',
                            marginLeft: '641px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>3
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 1020 410 L 1020 443.88" fill="none" stroke="rgb(0, 0, 0)" strokeMiterlimit={10}
                  pointerEvents="stroke"/>
            <path d="M 1020 453.88 L 1015 443.88 L 1025 443.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 1000 390 C 1000 401.05 1008.95 410 1020 410 C 1031.05 410 1040 401.05 1040 390 C 1040 378.95 1031.05 370 1020 370 C 1008.95 370 1000 378.95 1000 390"
                fill="#ffffff" stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '38px',
                            height: '1px',
                            paddingTop: '390px',
                            marginLeft: '1001px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>3
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 395 800 L 475 800 L 475 770 L 395 770 L 395 800" fill="#c1c0c4" stroke="#000000"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '80px',
                            height: '1px',
                            paddingTop: '785px',
                            marginLeft: '395px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>ID
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 1010 630 L 1090 630 L 1090 600 L 1010 600 L 1010 630" fill="#c1c0c4" stroke="#000000"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '80px',
                            height: '1px',
                            paddingTop: '615px',
                            marginLeft: '1010px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>ID
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 360 651 L 420 651 L 420 586 L 360 586 L 360 651" fill="#ffffff" stroke="rgb(0, 0, 0)"
                  strokeWidth={2} strokeMiterlimit={10} strokeDasharray="6 6" pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '58px',
                            height: '1px',
                            paddingTop: '619px',
                            marginLeft: '361px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '12px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>
                                    <div style={{textAlign: 'left'}}><span style={{
                                        backgroundColor: 'initial',
                                        fontFamily: 'Calibri',
                                        letterSpacing: '0px'
                                    }}>- Jira</span><br/></div>
                                    <span style={{
                                        fontFamily: 'Calibri',
                                        letterSpacing: '0px',
                                        backgroundColor: 'initial'
                                    }}><div style={{textAlign: 'left'}}><span
                                        style={{backgroundColor: 'initial', letterSpacing: '0px'}}>- Asana</span></div></span><span
                                    style={{
                                        fontFamily: 'Calibri',
                                        letterSpacing: '0px',
                                        backgroundColor: 'initial'
                                    }}><div style={{textAlign: 'left'}}><span
                                    style={{
                                        backgroundColor: 'initial',
                                        letterSpacing: '0px'
                                    }}>- Trello</span></div></span>
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 360 790 L 365 790 Q 370 790 370.04 780 L 370.5 651.52" fill="none" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} strokeDasharray="3 3" pointerEvents="stroke"/>
            <path d="M 270 1165 L 310 1165" fill="none" stroke="rgb(0, 0, 0)" strokeMiterlimit={10}
                  strokeDasharray="3 3" pointerEvents="stroke"/>
            <path d="M 150 1202 L 270 1202 L 270 1128 L 150 1128 L 150 1202" fill="#ffffff" stroke="rgb(0, 0, 0)"
                  strokeWidth={2} strokeMiterlimit={10} strokeDasharray="6 6" pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '118px',
                            height: '1px',
                            paddingTop: '1165px',
                            marginLeft: '151px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '12px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>
                                    <div style={{textAlign: 'left'}}><span style={{
                                        backgroundColor: 'initial',
                                        fontFamily: 'Calibri',
                                        letterSpacing: '0px'
                                    }}>- Software Developer</span></div>
                                    <span style={{
                                        letterSpacing: '0px',
                                        fontFamily: 'Calibri',
                                        backgroundColor: 'initial'
                                    }}><div style={{textAlign: 'left'}}><span style={{
                                        backgroundColor: 'initial',
                                        letterSpacing: '0px'
                                    }}>- Software Architect</span></div></span><span
                                    style={{fontFamily: 'Calibri', backgroundColor: 'initial'}}><div
                                    style={{textAlign: 'left'}}><span style={{backgroundColor: 'initial'}}>- Project Manager</span></div></span>
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 760 93.5 L 850 93.5 L 850 26 L 760 26 L 760 93.5" fill="#ffffff" stroke="rgb(0, 0, 0)"
                  strokeWidth={2} strokeMiterlimit={10} strokeDasharray="6 6" pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '88px',
                            height: '1px',
                            paddingTop: '60px',
                            marginLeft: '761px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '12px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>
                                    <div style={{textAlign: 'left'}}><span style={{
                                        backgroundColor: 'initial',
                                        fontFamily: 'Calibri',
                                        letterSpacing: '0px'
                                    }}>- Git</span></div>
                                    <div style={{textAlign: 'left'}}><span style={{
                                        backgroundColor: 'initial',
                                        fontFamily: 'Calibri',
                                        letterSpacing: '0px'
                                    }}>- Subversion</span></div>
                                    <span style={{
                                        fontFamily: 'Calibri',
                                        letterSpacing: '0px',
                                        backgroundColor: 'initial'
                                    }}><div style={{textAlign: 'left'}}><span style={{
                                        backgroundColor: 'initial',
                                        letterSpacing: '0px'
                                    }}>- Mercurial</span></div></span></div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 689.68 197.63 L 689.98 70 Q 690 60 700 59.98 L 760 59.85" fill="none" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} strokeDasharray="3 3" pointerEvents="stroke"/>
            <path d="M 650 566 L 800 566 L 800 466 L 650 466 L 650 566" fill="#ffffff" stroke="rgb(0, 0, 0)"
                  strokeWidth={2} strokeMiterlimit={10} strokeDasharray="6 6" pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '148px',
                            height: '1px',
                            paddingTop: '516px',
                            marginLeft: '651px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '12px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>
                                    <div style={{textAlign: 'left'}}><span style={{
                                        backgroundColor: 'initial',
                                        fontFamily: 'Calibri',
                                        letterSpacing: '0px'
                                    }}>- Vulnerability</span></div>
                                    <div style={{textAlign: 'left'}}><span style={{
                                        backgroundColor: 'initial',
                                        fontFamily: 'Calibri',
                                        letterSpacing: '0px'
                                    }}>- Bug</span></div>
                                    <span style={{
                                        fontFamily: 'Calibri',
                                        letterSpacing: '0px',
                                        backgroundColor: 'initial'
                                    }}><div style={{textAlign: 'left'}}><span
                                        style={{
                                            backgroundColor: 'initial',
                                            letterSpacing: '0px'
                                        }}>- Security Hotspot</span></div></span>
                                    <span
                                        style={{
                                            fontFamily: 'Calibri',
                                            letterSpacing: '0px',
                                            backgroundColor: 'initial'
                                        }}><div style={{textAlign: 'left'}}>
                                        <span
                                            style={{
                                                backgroundColor: 'initial',
                                                letterSpacing: '0px'
                                            }}>- Code smell</span>
                                    </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 779.97 600 L 779.9 567.4" fill="none" stroke="rgb(0, 0, 0)" strokeMiterlimit={10}
                  strokeDasharray="3 3" pointerEvents="stroke"/>
            <path d="M 769.58 750.4 L 560 750.02 Q 550 750 550.18 759.58 L 550.36 769.16" fill="none"
                  stroke="rgb(0, 0, 0)" strokeMiterlimit={10} strokeDasharray="3 3" pointerEvents="stroke"/>
            <path d="M 770 800 L 853 800 L 853 735 L 770 735 L 770 800" fill="#ffffff" stroke="rgb(0, 0, 0)"
                  strokeWidth={2} strokeMiterlimit={10} strokeDasharray="6 6" pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '81px',
                            height: '1px',
                            paddingTop: '768px',
                            marginLeft: '771px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '12px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>
                                    <div style={{textAlign: 'left'}}><span style={{
                                        backgroundColor: 'initial',
                                        fontFamily: 'Calibri',
                                        letterSpacing: '0px'
                                    }}>- SonarQube</span></div>
                                    <div style={{textAlign: 'left'}}><span style={{
                                        backgroundColor: 'initial',
                                        fontFamily: 'Calibri',
                                        letterSpacing: '0px'
                                    }}>- CAST</span></div>
                                    <span style={{
                                        fontFamily: 'Calibri',
                                        letterSpacing: '0px',
                                        backgroundColor: 'initial'
                                    }}><div style={{textAlign: 'left'}}><span style={{
                                        backgroundColor: 'initial',
                                        letterSpacing: '0px'
                                    }}>- MIND</span></div></span></div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 687 280 L 660 280 Q 650 280 650.56 280 L 651.12 280" fill="none" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 641.12 280 L 651.12 275 L 651.12 285 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 720 289 L 720 310 Q 720 320 710.56 320 L 701.12 320" fill="none" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 691.12 320 L 701.12 315 L 701.12 325 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 730 289 L 730 310 Q 730 320 730 319.44 L 730 318.88" fill="none" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 730 328.88 L 725 318.88 L 735 318.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 767 274 L 777 274 Q 787 274 783.5 274 L 781.75 274 Q 780 274 784.44 274 L 788.88 274" fill="none"
                  stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 798.88 274 L 788.88 279 L 788.88 269 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 700 259 L 700 254 Q 700 249 690 249 L 636.12 249" fill="none" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 626.12 249 L 636.12 244 L 636.12 254 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 760 259 L 760 249.5 Q 760 240 770 240 L 788.88 240" fill="none" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 798.88 240 L 788.88 245 L 788.88 235 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 740 289 L 740 297 Q 740 305 750 305 L 818.88 305" fill="none" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 828.88 305 L 818.88 310 L 818.88 300 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 750 259 L 750 220 Q 750 210 760 210 L 785.88 210" fill="none" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 795.88 210 L 785.88 215 L 785.88 205 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 737 259 L 737 249.5 Q 737 240 737 230 L 737 176.12" fill="none" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 737 166.12 L 742 176.12 L 732 176.12 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 687 289 L 767 289 L 767 259 L 687 259 L 687 289" fill="#02b3ef" stroke="#000000"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '80px',
                            height: '1px',
                            paddingTop: '274px',
                            marginLeft: '687px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}
                                     className="class-concept"
                                     onClick={() => onOpenTable({
                                         tableName: "Member",
                                         title: "Project Manager",
                                         onAdd: async table => table.get(await table.add({role: "Project Manager"})),
                                         query: table => table.where("role").equals("Project Manager").toArray()
                                     })}
                                >Project Manager
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 617 292 L 617 380 Q 617 390 617 399.44 L 617 408.88" fill="none" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 617 418.88 L 612 408.88 L 622 408.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 591.25 292 L 628.75 292 C 634.96 292 640 287.52 640 282 C 640 276.48 634.96 272 628.75 272 L 591.25 272 C 585.04 272 580 276.48 580 282 C 580 287.52 585.04 292 591.25 292"
                fill="#fdff02" stroke="#000000" strokeWidth={3} strokeMiterlimit={10} strokeDasharray="9 9"
                pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '60px',
                            height: '1px',
                            paddingTop: '282px',
                            marginLeft: '580px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '12px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}
                                     className="dynamic-relationship"
                                     onClick={() => onOpenTable({
                                         tableName: "Ticket",
                                         subTitle: "Create some tickets",
                                         canCreate: true,
                                         canUpdate: true
                                     })}
                                >Creates
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 660 327 L 660 340 Q 660 350 650 350 L 640 350 Q 630 350 630 360 L 630 408.88" fill="none"
                  stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 630 418.88 L 625 408.88 L 635 408.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 641.25 327 L 678.75 327 C 684.96 327 690 322.52 690 317 C 690 311.48 684.96 307 678.75 307 L 641.25 307 C 635.04 307 630 311.48 630 317 C 630 322.52 635.04 327 641.25 327"
                fill="#fdff02" stroke="#000000" strokeWidth={3} strokeMiterlimit={10} strokeDasharray="9 9"
                pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '60px',
                            height: '1px',
                            paddingTop: '317px',
                            marginLeft: '630px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '12px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}
                                     className="dynamic-relationship"
                                     onClick={() => onOpenTable({
                                         tableName: "Ticket",
                                         subTitle: "Update some ticket information",
                                         canUpdate: true
                                     })}
                                >Updates
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 860 272 L 865 272 Q 870 272 874.44 272 L 878.88 272" fill="none" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 888.88 272 L 878.88 277 L 878.88 267 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 811.25 284 L 848.75 284 C 854.96 284 860 279.52 860 274 C 860 268.48 854.96 264 848.75 264 L 811.25 264 C 805.04 264 800 268.48 800 274 C 800 279.52 805.04 284 811.25 284"
                fill="#fdff02" stroke="#000000" strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '60px',
                            height: '1px',
                            paddingTop: '274px',
                            marginLeft: '800px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>Is
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 760 335 L 765 335 Q 770 335 774.44 335 L 778.88 335" fill="none" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 788.88 335 L 778.88 340 L 778.88 330 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 711.25 350 L 748.75 350 C 754.96 350 760 345.52 760 340 C 760 334.48 754.96 330 748.75 330 L 711.25 330 C 705.04 330 700 334.48 700 340 C 700 345.52 705.04 350 711.25 350"
                fill="#fdff02" stroke="#000000" strokeWidth={3} strokeMiterlimit={10} strokeDasharray="9 9"
                pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '60px',
                            height: '1px',
                            paddingTop: '340px',
                            marginLeft: '700px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '12px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}
                                     className="dynamic-relationship"
                                     onClick={() => onOpenTable({
                                         tableName: "Sprint",
                                         subTitle: "Create sprints and assign tickets to them",
                                         canUpdate: true,
                                         canCreate: true
                                     })}
                                >Plans
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path
                d="M 790 335 C 790 346.05 798.95 355 810 355 C 821.05 355 830 346.05 830 335 C 830 323.95 821.05 315 810 315 C 798.95 315 790 323.95 790 335"
                fill="#ffffff" stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '38px',
                            height: '1px',
                            paddingTop: '335px',
                            marginLeft: '791px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>4
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 310 685 L 310 675 Q 310 665 310 672.5 L 310 676.25 Q 310 680 310 675.56 L 310 671.12" fill="none"
                  stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 310 661.12 L 315 671.12 L 305 671.12 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 290 705 C 290 716.05 298.95 725 310 725 C 321.05 725 330 716.05 330 705 C 330 693.95 321.05 685 310 685 C 298.95 685 290 693.95 290 705"
                fill="#ffffff" stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '38px',
                            height: '1px',
                            paddingTop: '705px',
                            marginLeft: '291px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>4
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path
                d="M 890 272 C 890 283.05 898.95 292 910 292 C 921.05 292 930 283.05 930 272 C 930 260.95 921.05 252 910 252 C 898.95 252 890 260.95 890 272"
                fill="#ffffff" stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '38px',
                            height: '1px',
                            paddingTop: '272px',
                            marginLeft: '891px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>5
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 562.72 1069.52 L 550 1069.55 Q 540 1069.57 535.56 1069.67 L 531.12 1069.76" fill="none"
                  stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 521.12 1069.98 L 531.01 1064.76 L 531.22 1074.76 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 560 1080 C 560 1091.05 568.95 1100 580 1100 C 591.05 1100 600 1091.05 600 1080 C 600 1068.95 591.05 1060 580 1060 C 568.95 1060 560 1068.95 560 1080"
                fill="#ffffff" stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '38px',
                            height: '1px',
                            paddingTop: '1080px',
                            marginLeft: '561px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>5
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 1210 357 L 1181.12 357" fill="none" stroke="rgb(0, 0, 0)" strokeMiterlimit={10}
                  pointerEvents="stroke"/>
            <path d="M 1171.12 357 L 1181.12 352 L 1181.12 362 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 1250 372 L 1250 385 Q 1250 395 1240 395 L 1181.12 395" fill="none" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 1171.12 395 L 1181.12 390 L 1181.12 400 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 1230 342 L 1230 327 Q 1230 317 1220 317 L 1181.12 317" fill="none" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 1171.12 317 L 1181.12 312 L 1181.12 322 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 1250 342 L 1250 298.12" fill="none" stroke="rgb(0, 0, 0)" strokeMiterlimit={10}
                  pointerEvents="stroke"/>
            <path d="M 1250 288.12 L 1255 298.12 L 1245 298.12 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 1270 372 L 1270 376 Q 1270 380 1270 389.44 L 1270 398.88" fill="none" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 1270 408.88 L 1265 398.88 L 1275 398.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 1290 357 L 1320 357 Q 1330 357 1330 367 L 1330 503.88" fill="none" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 1330 513.88 L 1325 503.88 L 1335 503.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 1270 342 L 1270 310 Q 1270 300 1280 300 L 1300 300 Q 1310 300 1310 290 L 1310 263.12" fill="none"
                  stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 1310 253.12 L 1315 263.12 L 1305 263.12 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 1210 372 L 1290 372 L 1290 342 L 1210 342 L 1210 372" fill="#02b3ef" stroke="#000000"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '80px',
                            height: '1px',
                            paddingTop: '357px',
                            marginLeft: '1210px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}
                                     className="class-concept"
                                     onClick={() => onOpenTable({
                                         tableName: "Member",
                                         title: "Software Developer",
                                         onAdd: async table => table.get(await table.add({role: "Software Developer"})),
                                         query: table => table.where("role").equals("Software Developer").toArray()
                                     })}
                                >Software Developer
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 1110 350 L 960 350 Q 950 350 950 360 L 950 408.88" fill="none" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 950 418.88 L 945 408.88 L 955 408.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 1121.25 367 L 1158.75 367 C 1164.96 367 1170 362.52 1170 357 C 1170 351.48 1164.96 347 1158.75 347 L 1121.25 347 C 1115.04 347 1110 351.48 1110 357 C 1110 362.52 1115.04 367 1121.25 367"
                fill="#fdff02" stroke="#000000" strokeWidth={3} strokeMiterlimit={10} strokeDasharray="9 9"
                pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '60px',
                            height: '1px',
                            paddingTop: '357px',
                            marginLeft: '1110px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '12px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}
                                     className="dynamic-relationship"
                                     onClick={() => onOpenTable({
                                         tableName: "Feature",
                                         subTitle: "Write or modify a feature",
                                         canUpdate: true,
                                         canCreate: true
                                     })}
                                >Writes
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path
                d="M 1110 390 L 1080 390 Q 1070 390 1070 380 L 1070 372 Q 1070 364 1060 364 L 1000 364 Q 990 364 990 374 L 990 414 Q 990 424 980.56 424 L 971.12 424"
                fill="none" stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 961.12 424 L 971.12 419 L 971.12 429 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 1121.25 405 L 1158.75 405 C 1164.96 405 1170 400.52 1170 395 C 1170 389.48 1164.96 385 1158.75 385 L 1121.25 385 C 1115.04 385 1110 389.48 1110 395 C 1110 400.52 1115.04 405 1121.25 405"
                fill="#fdff02" stroke="#000000" strokeWidth={3} strokeMiterlimit={10} strokeDasharray="9 9"
                pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '60px',
                            height: '1px',
                            paddingTop: '395px',
                            marginLeft: '1110px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '12px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}
                                     className="dynamic-relationship"
                                     onClick={() => onOpenTable({
                                         tableName: "Violation",
                                         subTitle: "Remove a violation by refactoring a feature",
                                         canDelete: true
                                     })}
                                >Refactors
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 1140 327 L 1140 333.5 Q 1140 340 1130 340 L 951.12 340" fill="none" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 941.12 340 L 951.12 335 L 951.12 345 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 1121.25 327 L 1158.75 327 C 1164.96 327 1170 322.52 1170 317 C 1170 311.48 1164.96 307 1158.75 307 L 1121.25 307 C 1115.04 307 1110 311.48 1110 317 C 1110 322.52 1115.04 327 1121.25 327"
                fill="#fdff02" stroke="#000000" strokeWidth={3} strokeMiterlimit={10} strokeDasharray="9 9"
                pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '60px',
                            height: '1px',
                            paddingTop: '317px',
                            marginLeft: '1110px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '12px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}
                                     className="dynamic-relationship"
                                     onClick={() => onOpenTable({
                                         tableName: "Ticket",
                                         subTitle: "Set or change the asignee of the ticket",
                                         canUpdate: true
                                     })}
                                >Develops
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path
                d="M 900 336 C 900 347.05 908.95 356 920 356 C 931.05 356 940 347.05 940 336 C 940 324.95 931.05 316 920 316 C 908.95 316 900 324.95 900 336"
                fill="#ffffff" stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '38px',
                            height: '1px',
                            paddingTop: '336px',
                            marginLeft: '901px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>6
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 570 505 L 570 497.5 Q 570 490 570 480 L 570 461.12" fill="none" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 570 451.12 L 575 461.12 L 565 461.12 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 550 525 C 550 536.05 558.95 545 570 545 C 581.05 545 590 536.05 590 525 C 590 513.95 581.05 505 570 505 C 558.95 505 550 513.95 550 525"
                fill="#ffffff" stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '38px',
                            height: '1px',
                            paddingTop: '525px',
                            marginLeft: '551px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>6
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path
                d="M 1121.25 259 L 1158.75 259 C 1164.96 259 1170 254.52 1170 249 C 1170 243.48 1164.96 239 1158.75 239 L 1121.25 239 C 1115.04 239 1110 243.48 1110 249 C 1110 254.52 1115.04 259 1121.25 259"
                fill="#712fa0" stroke="#000000" strokeWidth={3} strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '60px',
                            height: '1px',
                            paddingTop: '249px',
                            marginLeft: '1110px'
                        }}>
                            <div data-drawio-colors="color: #FFFFFF; "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(255, 255, 255)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>Guarantee
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 1140 259 L 1140 298.06" fill="none" stroke="rgb(0, 0, 0)" strokeWidth={4} strokeMiterlimit={10}
                  pointerEvents="stroke"/>
            <path d="M 1133.5 289.53 L 1140 302.53 L 1146.5 289.53" fill="none" stroke="rgb(0, 0, 0)" strokeWidth={4}
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 1230 201.25 C 1230 212.3 1238.95 221.25 1250 221.25 C 1261.05 221.25 1270 212.3 1270 201.25 C 1270 190.2 1261.05 181.25 1250 181.25 C 1238.95 181.25 1230 190.2 1230 201.25"
                fill="#ffffff" stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '38px',
                            height: '1px',
                            paddingTop: '201px',
                            marginLeft: '1231px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>7
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 1250 267 L 1250 232.37" fill="none" stroke="rgb(0, 0, 0)" strokeMiterlimit={10}
                  pointerEvents="stroke"/>
            <path d="M 1250 222.37 L 1255 232.37 L 1245 232.37 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 1231.25 287 L 1268.75 287 C 1274.96 287 1280 282.52 1280 277 C 1280 271.48 1274.96 267 1268.75 267 L 1231.25 267 C 1225.04 267 1220 271.48 1220 277 C 1220 282.52 1225.04 287 1231.25 287"
                fill="#fdff02" stroke="#000000" strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '60px',
                            height: '1px',
                            paddingTop: '277px',
                            marginLeft: '1220px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>Is
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 560 1130 L 520 1130 Q 510 1130 510 1120 L 510 1096.12" fill="none" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 510 1086.12 L 515 1096.12 L 505 1096.12 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 560 1130 C 560 1141.05 568.95 1150 580 1150 C 591.05 1150 600 1141.05 600 1130 C 600 1118.95 591.05 1110 580 1110 C 568.95 1110 560 1118.95 560 1130"
                fill="#ffffff" stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '38px',
                            height: '1px',
                            paddingTop: '1130px',
                            marginLeft: '561px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>7
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 1390 372 L 1390 381 Q 1390 390 1390 400 L 1390 413.88" fill="none" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 1390 423.88 L 1385 413.88 L 1395 413.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 1410 342 L 1410 298.12" fill="none" stroke="rgb(0, 0, 0)" strokeMiterlimit={10}
                  pointerEvents="stroke"/>
            <path d="M 1410 288.12 L 1415 298.12 L 1405 298.12 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 1450 365 L 1440 365 Q 1430 365 1430 375 L 1430 400 Q 1430 410 1434.44 410 L 1438.88 410"
                  fill="none" stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 1448.88 410 L 1438.88 415 L 1438.88 405 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 1420 372 L 1420 381 Q 1420 390 1420 400 L 1420 458.88" fill="none" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 1420 468.88 L 1415 458.88 L 1425 458.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 1450 358 L 1570 358 Q 1580 358 1580 348.06 L 1580 338.12" fill="none" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 1580 328.12 L 1585 338.12 L 1575 338.12 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 1450 350 L 1540 350 Q 1550 350 1550 340 L 1550 295.12" fill="none" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 1550 285.12 L 1555 295.12 L 1545 295.12 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 1440 342 L 1440 330 Q 1440 320 1450 320 L 1470 320 Q 1480 320 1480 310 L 1480 186.12" fill="none"
                  stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 1480 176.12 L 1485 186.12 L 1475 186.12 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 1370 357 L 1365 357 Q 1360 357 1360 347 L 1360 206.12" fill="none" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 1360 196.12 L 1365 206.12 L 1355 206.12 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 1450 366 L 1540 366 Q 1550 366 1550 376 L 1550 418.88" fill="none" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 1550 428.88 L 1545 418.88 L 1555 418.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path d="M 1370 372 L 1450 372 L 1450 342 L 1370 342 L 1370 372" fill="#02b3ef" stroke="#000000"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '80px',
                            height: '1px',
                            paddingTop: '357px',
                            marginLeft: '1370px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}
                                     className="class-concept"
                                     onClick={() => onOpenTable({
                                         tableName: "Member",
                                         title: "Software Architect",
                                         onAdd: async table => table.get(await table.add({role: "Software Architect"})),
                                         query: table => table.where("role").equals("Software Architect").toArray()
                                     })}
                                >Software Architect
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path
                d="M 1350 437 L 1333 437 C 1333 433.1 1327 433.1 1327 437 L 1327 437 L 1023 437 C 1023 433.1 1017 433.1 1017 437 L 1017 437 L 971.12 437"
                fill="none" stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 961.12 437 L 971.12 432 L 971.12 442 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 1361.25 445 L 1398.75 445 C 1404.96 445 1410 440.52 1410 435 C 1410 429.48 1404.96 425 1398.75 425 L 1361.25 425 C 1355.04 425 1350 429.48 1350 435 C 1350 440.52 1355.04 445 1361.25 445"
                fill="#fdff02" stroke="#000000" strokeWidth={3} strokeMiterlimit={10} strokeDasharray="9 9"
                pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '60px',
                            height: '1px',
                            paddingTop: '435px',
                            marginLeft: '1350px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '12px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}
                                     className="dynamic-relationship"
                                     onClick={() => onOpenTable({
                                         tableName: "Violation",
                                         subTitle: "Remove a violation by refactoring a feature",
                                         canDelete: true
                                     })}
                                >Refactors
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 1410 267 L 1410 257 Q 1410 247 1410 251 L 1410 253 Q 1410 255 1410 250.56 L 1410 246.12"
                  fill="none" stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 1410 236.12 L 1415 246.12 L 1405 246.12 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 1391.25 287 L 1428.75 287 C 1434.96 287 1440 282.52 1440 277 C 1440 271.48 1434.96 267 1428.75 267 L 1391.25 267 C 1385.04 267 1380 271.48 1380 277 C 1380 282.52 1385.04 287 1391.25 287"
                fill="#fdff02" stroke="#000000" strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '60px',
                            height: '1px',
                            paddingTop: '277px',
                            marginLeft: '1380px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>Is
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path
                d="M 1390 215 C 1390 226.05 1398.95 235 1410 235 C 1421.05 235 1430 226.05 1430 215 C 1430 203.95 1421.05 195 1410 195 C 1398.95 195 1390 203.95 1390 215"
                fill="#ffffff" stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '38px',
                            height: '1px',
                            paddingTop: '215px',
                            marginLeft: '1391px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>8
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 490 1162 L 490 1150 Q 490 1140 490 1130 L 490 1096.12" fill="none" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 490 1086.12 L 495 1096.12 L 485 1096.12 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 470 1182 C 470 1193.05 478.95 1202 490 1202 C 501.05 1202 510 1193.05 510 1182 C 510 1170.95 501.05 1162 490 1162 C 478.95 1162 470 1170.95 470 1182"
                fill="#ffffff" stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '38px',
                            height: '1px',
                            paddingTop: '1182px',
                            marginLeft: '471px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>8
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 1480 420 L 1480 430 Q 1480 440 1480 432.5 L 1480 428.75 Q 1480 425 1480 429.44 L 1480 433.88"
                  fill="none" stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 1480 443.88 L 1475 433.88 L 1485 433.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 1461.25 420 L 1498.75 420 C 1504.96 420 1510 415.52 1510 410 C 1510 404.48 1504.96 400 1498.75 400 L 1461.25 400 C 1455.04 400 1450 404.48 1450 410 C 1450 415.52 1455.04 420 1461.25 420"
                fill="#fdff02" stroke="#000000" strokeWidth={3} strokeMiterlimit={10} strokeDasharray="9 9"
                pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '60px',
                            height: '1px',
                            paddingTop: '410px',
                            marginLeft: '1450px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '12px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}
                                     className="dynamic-relationship"
                                     onClick={measureTechDebt}
                                >Measures
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path
                d="M 1460 465 C 1460 476.05 1468.95 485 1480 485 C 1491.05 485 1500 476.05 1500 465 C 1500 453.95 1491.05 445 1480 445 C 1468.95 445 1460 453.95 1460 465"
                fill="#ffffff" stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '38px',
                            height: '1px',
                            paddingTop: '465px',
                            marginLeft: '1461px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>9
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 960 570 L 960 580 Q 960 590 960 585 L 960 582.5 Q 960 580 960 584.44 L 960 588.88" fill="none"
                  stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 960 598.88 L 955 588.88 L 965 588.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 940 550 C 940 561.05 948.95 570 960 570 C 971.05 570 980 561.05 980 550 C 980 538.95 971.05 530 960 530 C 948.95 530 940 538.95 940 550"
                fill="#ffffff" stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '38px',
                            height: '1px',
                            paddingTop: '550px',
                            marginLeft: '941px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>10
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 870 571 L 870 581 Q 870 591 870 585.5 L 870 582.75 Q 870 580 870 584.44 L 870 588.88" fill="none"
                  stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 870 598.88 L 865 588.88 L 875 588.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 850 551 C 850 562.05 858.95 571 870 571 C 881.05 571 890 562.05 890 551 C 890 539.95 881.05 531 870 531 C 858.95 531 850 539.95 850 551"
                fill="#ffffff" stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '38px',
                            height: '1px',
                            paddingTop: '551px',
                            marginLeft: '851px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>9
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path
                d="M 1530 505 C 1530 516.05 1538.95 525 1550 525 C 1561.05 525 1570 516.05 1570 505 C 1570 493.95 1561.05 485 1550 485 C 1538.95 485 1530 493.95 1530 505"
                fill="#ffffff" stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '38px',
                            height: '1px',
                            paddingTop: '505px',
                            marginLeft: '1531px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>10
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 860 390 L 940 390 L 940 360 L 860 360 L 860 390" fill="#c1c0c4" stroke="#000000"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '80px',
                            height: '1px',
                            paddingTop: '375px',
                            marginLeft: '860px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>Lines of Code (LOC)
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path
                d="M 1240 420 L 1170 420 Q 1160 420 1160 427 L 1160 434 C 1163.9 434 1163.9 440 1160 440 L 1160 440 L 1160 477 C 1163.9 477 1163.9 483 1160 483 L 1160 483 L 1160 512 C 1163.9 512 1163.9 518 1160 518 L 1160 518 L 1160 548 C 1163.9 548 1163.9 554 1160 554 L 1160 554 L 1160 588.88"
                fill="none" stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 1160 598.88 L 1155 588.88 L 1165 588.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 1251.25 430 L 1288.75 430 C 1294.96 430 1300 425.52 1300 420 C 1300 414.48 1294.96 410 1288.75 410 L 1251.25 410 C 1245.04 410 1240 414.48 1240 420 C 1240 425.52 1245.04 430 1251.25 430"
                fill="#fdff02" stroke="#000000" strokeWidth={3} strokeMiterlimit={10} strokeDasharray="9 9"
                pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '60px',
                            height: '1px',
                            paddingTop: '420px',
                            marginLeft: '1240px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '12px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}
                                     className="dynamic-relationship"
                                     onClick={() => onOpenTable({
                                         tableName: "Violation",
                                         subTitle: "Create or update a violation",
                                         canCreate: true,
                                         canUpdate: true
                                     })}
                                >Makes
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 1420 490 L 1420 990 Q 1420 1000 1410 1000 L 1050 1000 Q 1040 1000 1040 990 L 1040 976.12"
                  fill="none" stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 1040 966.12 L 1045 976.12 L 1035 976.12 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 1401.25 490 L 1438.75 490 C 1444.96 490 1450 485.52 1450 480 C 1450 474.48 1444.96 470 1438.75 470 L 1401.25 470 C 1395.04 470 1390 474.48 1390 480 C 1390 485.52 1395.04 490 1401.25 490"
                fill="#fdff02" stroke="#000000" strokeWidth={3} strokeMiterlimit={10} strokeDasharray="9 9"
                pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '60px',
                            height: '1px',
                            paddingTop: '480px',
                            marginLeft: '1390px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '12px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}
                                     className="dynamic-relationship"
                                     onClick={() => onOpenTable({
                                         tableName: "Defect",
                                         subTitle: "Report a Defect in the application",
                                         canCreate: true,
                                         canUpdate: true
                                     })}
                                >Reports
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 1330 535 L 1330 900 Q 1330 910 1320 910 L 1040 910 Q 1030 910 1030 916.94 L 1030 923.88"
                  fill="none" stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 1030 933.88 L 1025 923.88 L 1035 923.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 1311.25 535 L 1348.75 535 C 1354.96 535 1360 530.52 1360 525 C 1360 519.48 1354.96 515 1348.75 515 L 1311.25 515 C 1305.04 515 1300 519.48 1300 525 C 1300 530.52 1305.04 535 1311.25 535"
                fill="#fdff02" stroke="#000000" strokeWidth={3} strokeMiterlimit={10} strokeDasharray="9 9"
                pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '60px',
                            height: '1px',
                            paddingTop: '525px',
                            marginLeft: '1300px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '12px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}
                                     className="dynamic-relationship"
                                     onClick={() => onOpenTable({
                                         tableName: "Defect",
                                         subTitle: "Fix a Defect of the application by deleting it",
                                         canDelete: true
                                     })}
                                >Fixes
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path
                d="M 1594 327 L 1594 940 Q 1594 950 1584 950 L 1423 950 C 1423 946.1 1417 946.1 1417 950 L 1417 950 L 1061.12 950"
                fill="none" stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 1051.12 950 L 1061.12 945 L 1061.12 955 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 1575.25 327 L 1612.75 327 C 1618.96 327 1624 322.52 1624 317 C 1624 311.48 1618.96 307 1612.75 307 L 1575.25 307 C 1569.04 307 1564 311.48 1564 317 C 1564 322.52 1569.04 327 1575.25 327"
                fill="#fdff02" stroke="#000000" strokeWidth={3} strokeMiterlimit={10} strokeDasharray="9 9"
                pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '60px',
                            height: '1px',
                            paddingTop: '317px',
                            marginLeft: '1564px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '12px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}
                                     className="dynamic-relationship"
                                     onClick={() => onOpenTable({
                                         tableName: "Defect",
                                         subTitle: "Fix a Defect of the application by deleting it",
                                         canDelete: true
                                     })}
                                >Fixes
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 1550 264 L 1550 233.12" fill="none" stroke="rgb(0, 0, 0)" strokeMiterlimit={10}
                  pointerEvents="stroke"/>
            <path d="M 1550 223.12 L 1555 233.12 L 1545 233.12 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 1531.25 284 L 1568.75 284 C 1574.96 284 1580 279.52 1580 274 C 1580 268.48 1574.96 264 1568.75 264 L 1531.25 264 C 1525.04 264 1520 268.48 1520 274 C 1520 279.52 1525.04 284 1531.25 284"
                fill="#fdff02" stroke="#000000" strokeWidth={3} strokeMiterlimit={10} strokeDasharray="9 9"
                pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '60px',
                            height: '1px',
                            paddingTop: '274px',
                            marginLeft: '1520px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '12px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}
                                     className="dynamic-relationship"
                                     onClick={() => onOpenTable({
                                         tableName: "Release",
                                         subTitle: "Publish a Release of the code",
                                         canCreate: true,
                                         canUpdate: true
                                     })}
                                >Publishes
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path
                d="M 1530 202 C 1530 213.05 1538.95 222 1550 222 C 1561.05 222 1570 213.05 1570 202 C 1570 190.95 1561.05 182 1550 182 C 1538.95 182 1530 190.95 1530 202"
                fill="#ffffff" stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '38px',
                            height: '1px',
                            paddingTop: '202px',
                            marginLeft: '1531px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>11
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 777 900 L 777 920 Q 777 930 777 926.94 L 777 923.88" fill="none" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 777 933.88 L 772 923.88 L 782 923.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 757 880 C 757 891.05 765.95 900 777 900 C 788.05 900 797 891.05 797 880 C 797 868.95 788.05 860 777 860 C 765.95 860 757 868.95 757 880"
                fill="#ffffff" stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '38px',
                            height: '1px',
                            paddingTop: '880px',
                            marginLeft: '758px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>11
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 565 249 L 526.12 249" fill="none" stroke="rgb(0, 0, 0)" strokeMiterlimit={10}
                  pointerEvents="stroke"/>
            <path d="M 516.12 249 L 526.12 244 L 526.12 254 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 576.25 259 L 613.75 259 C 619.96 259 625 254.52 625 249 C 625 243.48 619.96 239 613.75 239 L 576.25 239 C 570.04 239 565 243.48 565 249 C 565 254.52 570.04 259 576.25 259"
                fill="#fdff02" stroke="#000000" strokeWidth={3} strokeMiterlimit={10} strokeDasharray="9 9"
                pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '60px',
                            height: '1px',
                            paddingTop: '249px',
                            marginLeft: '565px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '12px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}
                                     className="dynamic-relationship"
                                     onClick={() => onOpenTable({
                                         tableName: "Member",
                                         subTitle: "Register a development team member",
                                         canCreate: true,
                                         canUpdate: true
                                     })}
                                >Registers
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path
                d="M 475 249 C 475 260.05 483.95 269 495 269 C 506.05 269 515 260.05 515 249 C 515 237.95 506.05 229 495 229 C 483.95 229 475 237.95 475 249"
                fill="#ffffff" stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '38px',
                            height: '1px',
                            paddingTop: '249px',
                            marginLeft: '476px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>12
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 495 1020 L 495 1040 Q 495 1050 495 1046.94 L 495 1043.88" fill="none" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 495 1053.88 L 490 1043.88 L 500 1043.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 475 1000 C 475 1011.05 483.95 1020 495 1020 C 506.05 1020 515 1011.05 515 1000 C 515 988.95 506.05 980 495 980 C 483.95 980 475 988.95 475 1000"
                fill="#ffffff" stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '38px',
                            height: '1px',
                            paddingTop: '1000px',
                            marginLeft: '476px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>12
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 860 240 L 928.88 240" fill="none" stroke="rgb(0, 0, 0)" strokeMiterlimit={10}
                  pointerEvents="stroke"/>
            <path d="M 938.88 240 L 928.88 245 L 928.88 235 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 811.25 250 L 848.75 250 C 854.96 250 860 245.52 860 240 C 860 234.48 854.96 230 848.75 230 L 811.25 230 C 805.04 230 800 234.48 800 240 C 800 245.52 805.04 250 811.25 250"
                fill="#fdff02" stroke="#000000" strokeWidth={3} strokeMiterlimit={10} strokeDasharray="9 9"
                pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '60px',
                            height: '1px',
                            paddingTop: '240px',
                            marginLeft: '800px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '12px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}
                                     className="dynamic-relationship"
                                     onClick={() => onOpenTable({
                                         tableName: "SoftwareDevelopmentProject",
                                         subTitle: "Register a Software Development Project",
                                         canCreate: true,
                                         canUpdate: true
                                     })}
                                >Registers
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path
                d="M 940 240 C 940 251.05 948.95 260 960 260 C 971.05 260 980 251.05 980 240 C 980 228.95 971.05 220 960 220 C 948.95 220 940 228.95 940 240"
                fill="#ffffff" stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '38px',
                            height: '1px',
                            paddingTop: '240px',
                            marginLeft: '941px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>13
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 340 890 L 340 861.12" fill="none" stroke="rgb(0, 0, 0)" strokeMiterlimit={10}
                  pointerEvents="stroke"/>
            <path d="M 340 851.12 L 345 861.12 L 335 861.12 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 320 910 C 320 921.05 328.95 930 340 930 C 351.05 930 360 921.05 360 910 C 360 898.95 351.05 890 340 890 C 328.95 890 320 898.95 320 910"
                fill="#ffffff" stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '38px',
                            height: '1px',
                            paddingTop: '910px',
                            marginLeft: '321px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>13
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 1480 155 L 1480 20 Q 1480 10 1470 10 L 450 10 Q 440 10 440 20 L 440 128.88" fill="none"
                  stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 440 138.88 L 435 128.88 L 445 128.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 1461.25 175 L 1498.75 175 C 1504.96 175 1510 170.52 1510 165 C 1510 159.48 1504.96 155 1498.75 155 L 1461.25 155 C 1455.04 155 1450 159.48 1450 165 C 1450 170.52 1455.04 175 1461.25 175"
                fill="#fdff02" stroke="#000000" strokeWidth={3} strokeMiterlimit={10} strokeDasharray="9 9"
                pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '60px',
                            height: '1px',
                            paddingTop: '165px',
                            marginLeft: '1450px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '12px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}
                                     className="dynamic-relationship"
                                     onClick={() => onOpenTable({
                                         tableName: "Repository",
                                         subTitle: "Create a Repository",
                                         canCreate: true,
                                         canUpdate: true
                                     })}
                                >Creates
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 1310 232 L 1310 176.12" fill="none" stroke="rgb(0, 0, 0)" strokeMiterlimit={10}
                  pointerEvents="stroke"/>
            <path d="M 1310 166.12 L 1315 176.12 L 1305 176.12 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 1291.25 252 L 1328.75 252 C 1334.96 252 1340 247.52 1340 242 C 1340 236.48 1334.96 232 1328.75 232 L 1291.25 232 C 1285.04 232 1280 236.48 1280 242 C 1280 247.52 1285.04 252 1291.25 252"
                fill="#fdff02" stroke="#000000" strokeWidth={3} strokeMiterlimit={10} strokeDasharray="9 9"
                pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '60px',
                            height: '1px',
                            paddingTop: '242px',
                            marginLeft: '1280px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '12px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}
                                     className="dynamic-relationship"
                                     onClick={() => onOpenTable({
                                         tableName: "Commit",
                                         subTitle: "Create a commit",
                                         canCreate: true,
                                         canUpdate: true
                                     })}
                                >Makes
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 1360 175 L 1360 136.12" fill="none" stroke="rgb(0, 0, 0)" strokeMiterlimit={10}
                  pointerEvents="stroke"/>
            <path d="M 1360 126.12 L 1365 136.12 L 1355 136.12 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 1341.25 195 L 1378.75 195 C 1384.96 195 1390 190.52 1390 185 C 1390 179.48 1384.96 175 1378.75 175 L 1341.25 175 C 1335.04 175 1330 179.48 1330 185 C 1330 190.52 1335.04 195 1341.25 195"
                fill="#fdff02" stroke="#000000" strokeWidth={3} strokeMiterlimit={10} strokeDasharray="9 9"
                pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '60px',
                            height: '1px',
                            paddingTop: '185px',
                            marginLeft: '1330px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '12px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}
                                     className="dynamic-relationship"
                                     onClick={() => onOpenTable({
                                         tableName: "Commit",
                                         subTitle: "Create a commit",
                                         canCreate: true,
                                         canUpdate: true
                                     })}
                                >Makes
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path
                d="M 1290 145 C 1290 156.05 1298.95 165 1310 165 C 1321.05 165 1330 156.05 1330 145 C 1330 133.95 1321.05 125 1310 125 C 1298.95 125 1290 133.95 1290 145"
                fill="#ffffff" stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '38px',
                            height: '1px',
                            paddingTop: '145px',
                            marginLeft: '1291px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>17
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path
                d="M 1340 105 C 1340 116.05 1348.95 125 1360 125 C 1371.05 125 1380 116.05 1380 105 C 1380 93.95 1371.05 85 1360 85 C 1348.95 85 1340 93.95 1340 105"
                fill="#ffffff" stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '38px',
                            height: '1px',
                            paddingTop: '105px',
                            marginLeft: '1341px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>15
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path
                d="M 290 202 L 380 202 Q 390 202 390 212 L 390 230 Q 390 240 400 240 L 410 240 Q 420 240 420 250 L 420 270.88"
                fill="none" stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 420 280.88 L 415 270.88 L 425 270.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 250 202 C 250 213.05 258.95 222 270 222 C 281.05 222 290 213.05 290 202 C 290 190.95 281.05 182 270 182 C 258.95 182 250 190.95 250 202"
                fill="#ffffff" stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '38px',
                            height: '1px',
                            paddingTop: '202px',
                            marginLeft: '251px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>17
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 330 232 L 360 232 Q 370 232 370 242 L 370 280 Q 370 290 379.44 290 L 388.88 290" fill="none"
                  stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 398.88 290 L 388.88 295 L 388.88 285 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 290 232 C 290 243.05 298.95 252 310 252 C 321.05 252 330 243.05 330 232 C 330 220.95 321.05 212 310 212 C 298.95 212 290 220.95 290 232"
                fill="#ffffff" stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '38px',
                            height: '1px',
                            paddingTop: '232px',
                            marginLeft: '291px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>15
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path
                d="M 890 305 L 1040 305 Q 1050 305 1050 315 L 1050 337 C 1053.9 337 1053.9 343 1050 343 L 1050 343 L 1050 347 C 1053.9 347 1053.9 353 1050 353 L 1050 353 L 1050 361 C 1053.9 361 1053.9 367 1050 367 L 1050 367 L 1050 434 C 1053.9 434 1053.9 440 1050 440 L 1050 440 L 1050 443.88"
                fill="none" stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 1050 453.88 L 1045 443.88 L 1055 443.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 841.25 315 L 878.75 315 C 884.96 315 890 310.52 890 305 C 890 299.48 884.96 295 878.75 295 L 841.25 295 C 835.04 295 830 299.48 830 305 C 830 310.52 835.04 315 841.25 315"
                fill="#fdff02" stroke="#000000" strokeWidth={3} strokeMiterlimit={10} strokeDasharray="9 9"
                pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '60px',
                            height: '1px',
                            paddingTop: '305px',
                            marginLeft: '830px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '12px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}
                                     className="dynamic-relationship"
                                     onClick={() => onOpenTable({
                                         tableName: "Code",
                                         subTitle: "Register an application Code base",
                                         canCreate: true,
                                         canUpdate: true
                                     })}
                                >Registers
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path
                d="M 890 210 C 890 221.05 898.95 230 910 230 C 921.05 230 930 221.05 930 210 C 930 198.95 921.05 190 910 190 C 898.95 190 890 198.95 890 210"
                fill="#ffffff" stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '38px',
                            height: '1px',
                            paddingTop: '210px',
                            marginLeft: '891px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>14
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 857 210 L 867 210 Q 877 210 873.5 210 L 871.75 210 Q 870 210 874.44 210 L 878.88 210" fill="none"
                  stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 888.88 210 L 878.88 215 L 878.88 205 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 808.25 220 L 845.75 220 C 851.96 220 857 215.52 857 210 C 857 204.48 851.96 200 845.75 200 L 808.25 200 C 802.04 200 797 204.48 797 210 C 797 215.52 802.04 220 808.25 220"
                fill="#fdff02" stroke="#000000" strokeWidth={3} strokeMiterlimit={10} strokeDasharray="9 9"
                pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '60px',
                            height: '1px',
                            paddingTop: '210px',
                            marginLeft: '797px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '12px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}
                                     className="dynamic-relationship"
                                     onClick={() => onOpenTable({
                                         tableName: "Application",
                                         subTitle: "Register an Application",
                                         canCreate: true,
                                         canUpdate: true
                                     })}
                                >Registers
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 545 890 L 545 895 Q 545 900 545 910 L 545 923.88" fill="none" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 545 933.88 L 540 923.88 L 550 923.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 525 870 C 525 881.05 533.95 890 545 890 C 556.05 890 565 881.05 565 870 C 565 858.95 556.05 850 545 850 C 533.95 850 525 858.95 525 870"
                fill="#ffffff" stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '38px',
                            height: '1px',
                            paddingTop: '870px',
                            marginLeft: '526px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>14
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 767 155 L 795.88 155" fill="none" stroke="rgb(0, 0, 0)" strokeMiterlimit={10}
                  pointerEvents="stroke"/>
            <path d="M 805.88 155 L 795.88 160 L 795.88 150 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 718.25 165 L 755.75 165 C 761.96 165 767 160.52 767 155 C 767 149.48 761.96 145 755.75 145 L 718.25 145 C 712.04 145 707 149.48 707 155 C 707 160.52 712.04 165 718.25 165"
                fill="#fdff02" stroke="#000000" strokeWidth={3} strokeMiterlimit={10} strokeDasharray="9 9"
                pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '60px',
                            height: '1px',
                            paddingTop: '155px',
                            marginLeft: '707px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '12px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}
                                     className="dynamic-relationship"
                                     onClick={() => onOpenTable({
                                         tableName: "DevelopmentTeam",
                                         subTitle: "Register a Development Team",
                                         canCreate: true,
                                         canUpdate: true
                                     })}
                                >Registers
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path
                d="M 807 155 C 807 166.05 815.95 175 827 175 C 838.05 175 847 166.05 847 155 C 847 143.95 838.05 135 827 135 C 815.95 135 807 143.95 807 155"
                fill="#ffffff" stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '38px',
                            height: '1px',
                            paddingTop: '155px',
                            marginLeft: '808px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>16
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 310 950 L 378.88 950" fill="none" stroke="rgb(0, 0, 0)" strokeMiterlimit={10}
                  pointerEvents="stroke"/>
            <path d="M 388.88 950 L 378.88 955 L 378.88 945 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 270 950 C 270 961.05 278.95 970 290 970 C 301.05 970 310 961.05 310 950 C 310 938.95 301.05 930 290 930 C 278.95 930 270 938.95 270 950"
                fill="#ffffff" stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '38px',
                            height: '1px',
                            paddingTop: '950px',
                            marginLeft: '271px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '11px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}>16
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
            <path d="M 1550 450 L 1550 460 Q 1550 470 1550 467.5 L 1550 466.25 Q 1550 465 1550 469.44 L 1550 473.88"
                  fill="none" stroke="rgb(0, 0, 0)" strokeMiterlimit={10} pointerEvents="stroke"/>
            <path d="M 1550 483.88 L 1545 473.88 L 1555 473.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)"
                  strokeMiterlimit={10} pointerEvents="all"/>
            <path
                d="M 1531.25 450 L 1568.75 450 C 1574.96 450 1580 445.52 1580 440 C 1580 434.48 1574.96 430 1568.75 430 L 1531.25 430 C 1525.04 430 1520 434.48 1520 440 C 1520 445.52 1525.04 450 1531.25 450"
                fill="#fdff02" stroke="#000000" strokeWidth={3} strokeMiterlimit={10} strokeDasharray="9 9"
                pointerEvents="all"/>
            <g transform="translate(-0.5 -0.5)">
                <switch>
                    <foreignObject pointerEvents="none" width="100%" height="100%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                   style={{overflow: 'visible', textAlign: 'left'}}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'unsafe center',
                            justifyContent: 'unsafe center',
                            width: '60px',
                            height: '1px',
                            paddingTop: '440px',
                            marginLeft: '1520px'
                        }}>
                            <div data-drawio-colors="color: rgb(0, 0, 0); "
                                 style={{boxSizing: 'border-box', fontSize: '0px', textAlign: 'center'}}>
                                <div style={{
                                    display: 'inline-block',
                                    fontSize: '12px',
                                    fontFamily: 'Helvetica',
                                    color: 'rgb(0, 0, 0)',
                                    lineHeight: '1.2',
                                    pointerEvents: 'all',
                                    whiteSpace: 'normal',
                                    overflowWrap: 'normal'
                                }}
                                     className="dynamic-relationship"
                                     onClick={measureTechDebt}
                                >Measures
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                </switch>
            </g>
        </g>
    </svg>;
