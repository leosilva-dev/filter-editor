import { Button } from '@material-ui/core'
import styles from '../styles/img.module.css'

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
                    <Button variant="contained" color="primary" component="span">
                        Upload
                    </Button>
                </label>
            </div>
        </div>

    )
}

