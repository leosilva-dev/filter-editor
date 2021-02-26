import { Button } from '@material-ui/core'
import styles from '../styles/img.module.css'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

export function ImageViewr() {

    function loadFile(event: any) {
        const img = document.getElementById('imgToEdit').setAttribute('src', URL.createObjectURL(event.target.files[0]))
    }

    return (
        <div>
            <div>
                <img id="imgToEdit" className={styles.filter} width="720" src="" />
            </div>
            <div>
                <input
                    accept="image/*"
                    id="contained-button-file"
                    type="file"
                    style={{ display: 'none' }}
                    onChange={loadFile}
                />
                <label htmlFor="contained-button-file">
                    <Button variant="contained" color="primary" component="span" startIcon={<ArrowUpwardIcon />} style={{ textTransform: 'none' }}>
                        Upload image to edit
                    </Button>
                </label>
            </div>
        </div>

    )
}

