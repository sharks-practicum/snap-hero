import React, { useEffect, useState } from 'react'
import { getForums } from "./fake-data"
import styles from './styles.module.scss'
import { useNavigate } from "react-router-dom"
import ForumRow from "./ForumRow"

interface lastPost {
    date: string;
    userAvatarUrl: null;
    userName: string;
    postTitle: string;
}

export interface Forum {
    id: number;
    title: string;
    description: string;
    lastPost: lastPost;
    postsCount: number;
    repliesCount: number;
}
function ForumPage() {
    const [forums, setForums] = useState<Forum[]>([]);

    useEffect(() => {
        const gotForums = getForums()
        setForums(gotForums)
    }, []);

    const navigate = useNavigate();

    const onClickToRow = (forumId: number) => {
        navigate(`/forum/${forumId}/posts`)
    }

    const ForumRows = forums.map((forum) =>
            <ForumRow forum={forum} onClickToRow={onClickToRow} />
        )

  return (
    <div className={styles['layout-outer']}>
        <table className={styles.table}>
            <thead>
            <tr>
                <th>Разделы</th>
                <th>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.8293 6.23284C15.46 4.49535 14.4807 2.91392 13.0714 1.78C11.6303 0.626896 9.8393 -0.000910929 7.99359 9.92057e-07C5.81788 9.92057e-07 3.78574 0.838213 2.26646 2.36035C0.798251 3.83321 -0.00639033 5.77784 3.82239e-05 7.83463C8.82077e-05 9.34259 0.442794 10.8174 1.27325 12.076L1.42861 12.2921L0.571465 16L4.67146 14.98C4.67146 14.98 4.7536 15.0075 4.81431 15.0307C4.87503 15.0539 5.39753 15.2543 5.95181 15.4093C6.41252 15.5378 7.37109 15.7307 8.12216 15.7307C10.2525 15.7307 12.2418 14.9057 13.7232 13.4071C15.1914 11.9203 16 9.94355 16 7.83891C16.0001 7.29902 15.9429 6.76065 15.8293 6.23284Z" fill="#CBD5E0"/>
                    </svg>
                </th>
                <th>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.55544 11.4949C1.55544 11.4971 1.55544 11.5011 1.55294 11.5067C1.55388 11.503 1.55451 11.4989 1.55544 11.4949Z" fill="#CBD5E0"/>
                        <path d="M13.4135 12.0083C13.3106 12.0061 13.209 11.9849 13.1138 11.9458L11.3394 11.3168L11.3263 11.3115C11.2876 11.2953 11.246 11.2873 11.2041 11.2877C11.1655 11.2878 11.1272 11.2948 11.091 11.3083C11.0479 11.3246 10.6594 11.4705 10.2519 11.5824C10.031 11.643 9.26194 11.8408 8.64475 11.8408C7.06725 11.8408 5.59225 11.2346 4.49194 10.1337C3.95441 9.59943 3.52818 8.96389 3.23793 8.26382C2.94768 7.56375 2.79917 6.81307 2.801 6.05522C2.80099 5.66034 2.84353 5.26661 2.92788 4.88085C3.20256 3.61147 3.93006 2.45678 4.97631 1.63085C6.04955 0.788982 7.37447 0.332043 8.7385 0.333346C10.3701 0.333346 11.8904 0.958346 13.0198 2.08897C14.0873 3.15991 14.6723 4.56803 14.6676 6.05366C14.6666 7.15759 14.337 8.23623 13.7207 9.1521L13.7148 9.16085L13.6916 9.1921C13.6863 9.19929 13.681 9.20616 13.676 9.21335L13.6713 9.22178C13.6589 9.24293 13.6476 9.26473 13.6376 9.2871L14.1294 11.0352C14.1512 11.1073 14.163 11.1821 14.1644 11.2574C14.1646 11.3561 14.1452 11.4538 14.1075 11.5449C14.0698 11.6361 14.0145 11.7189 13.9448 11.7887C13.875 11.8584 13.7922 11.9137 13.701 11.9514C13.6099 11.9891 13.5121 12.0085 13.4135 12.0083Z" fill="#CBD5E0"/>
                        <path d="M9.03757 12.6268C9.00528 12.564 8.95985 12.5089 8.90436 12.4652C8.84888 12.4215 8.78463 12.3903 8.71601 12.3736C8.53538 12.3258 8.32476 12.334 8.16382 12.3221C6.64424 12.2164 5.21427 11.5643 4.1382 10.4861C3.18156 9.53486 2.55984 8.29854 2.36664 6.96333C2.32289 6.65896 2.32289 6.58333 2.32289 6.58333C2.32287 6.48178 2.29193 6.38264 2.23418 6.2991C2.17643 6.21557 2.09462 6.1516 1.99962 6.1157C1.90463 6.07981 1.80095 6.07369 1.70239 6.09816C1.60383 6.12264 1.51506 6.17654 1.44789 6.25271C1.44789 6.25271 1.20164 6.52083 1.08539 6.78989C0.759354 7.5411 0.620313 8.36016 0.680182 9.17688C0.74005 9.9936 0.997044 10.7836 1.42914 11.4793C1.51039 11.6146 1.51039 11.6771 1.49227 11.8177C1.40695 12.2586 1.25758 13.0365 1.17977 13.4399C1.154 13.5707 1.16359 13.7061 1.20753 13.832C1.25147 13.9579 1.32818 14.0698 1.42977 14.1561L1.44414 14.1683C1.57852 14.2751 1.74504 14.3332 1.91664 14.3333C2.01316 14.3334 2.10875 14.3144 2.19789 14.2774L3.87008 13.6321C3.92765 13.6102 3.99125 13.6102 4.04883 13.6321C4.70726 13.8771 5.39257 14.0071 6.04195 14.0071C6.85105 14.0078 7.65036 13.8301 8.38288 13.4865C8.55351 13.4065 8.82038 13.3196 8.97663 13.139C9.03576 13.0689 9.07305 12.983 9.08388 12.892C9.09471 12.801 9.07861 12.7087 9.03757 12.6268Z" fill="#CBD5E0"/>
                    </svg>
                </th>
                <th>Последний пост</th>
            </tr>
            </thead>
            <tbody>
                { ForumRows }
            </tbody>
        </table>
    </div>
  )
}

export default ForumPage
