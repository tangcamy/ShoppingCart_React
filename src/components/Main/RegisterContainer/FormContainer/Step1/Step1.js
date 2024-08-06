import {Input,Select} from "../FormElements/Elements";


function Step1() {
    return <form className="col col-12" data-phase="address">
        <h3 className="form-title">寄送地址</h3>

        <section className="form-body col col-12">
            <div className="col col-12">
                <Select
                    groupClass="input-w-lg-2 input-w-sm-s1"
                    label="稱謂"
                    options={[
                        { value: "mr", label: "先生" },
                        { value: "ms", label: "女士" },
                        { value: "mx", label: "不明" }
                    ]}
                />
                <Input
                    groupClass="input-w-lg-4 input-w-sm-s2"
                    label="姓名"
                    placeholder="請輸入姓名"
                />
            </div>

            <div className="col col-12">
                <Input
                    groupClass="input-w-lg-3 input-w-sm-full"
                    label="電話"
                    placeholder="請輸入行動電話"
                />
                <Input
                    groupClass="input-w-lg-3 input-w-sm-full"
                    label="Email"
                    placeholder="請輸入電子郵件"
                />
            </div>
            <div className="col col-12">
                <Select
                    groupClass="input-w-lg-2 input-w-sm-full"
                    label="縣市"
                    options={[
                        { value: "", label: "請選擇縣市" },
                        { value: "KLU", label: "基隆市" },
                        { value: "TPH", label: "新北市" },
                        { value: "TPE", label: "臺北市" },
                        { value: "TYC", label: "桃園市" },
                        { value: "HSH", label: "新竹縣" },
                        { value: "HSC", label: "新竹市" },
                        { value: "MAC", label: "苗栗市" },
                        { value: "MAL", label: "苗栗縣" },
                        { value: "TXG", label: "臺中市" },
                        { value: "CWH", label: "彰化縣" },
                        { value: "CWS", label: "彰化市" },
                        { value: "NTC", label: "南投市" },
                        { value: "NTO", label: "南投縣" },
                        { value: "YLH", label: "雲林縣" },
                        { value: "CHY", label: "嘉義縣" },
                        { value: "CYI", label: "嘉義市" },
                        { value: "TNN", label: "臺南市" },
                        { value: "KHH", label: "高雄市" },
                        { value: "IUH", label: "屏東縣" },
                        { value: "PTS", label: "屏東市" },
                        { value: "ILN", label: "宜蘭縣" },
                        { value: "ILC", label: "宜蘭市" },
                        { value: "HWA", label: "花蓮縣" },
                        { value: "HWC", label: "花蓮市" },
                        { value: "TTC", label: "臺東市" },
                        { value: "TTT", label: "臺東縣" },
                        { value: "PEH", label: "澎湖縣" },
                        { value: "KMN", label: "金門縣" },
                        { value: "LNN", label: "連江縣" }
                    ]}
                />
                <Input
                    groupClass="input-w-lg-4 input-w-sm-full"
                    label="地址"
                    placeholder="請輸入地址"
                />
            </div>
        </section>
    </form>
}

export default Step1;