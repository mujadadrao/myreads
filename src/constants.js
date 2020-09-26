// Book Shelf Types

export const CURRENTLY_READING = 'currentlyReading';
export const WANT_TO_READ = 'wantToRead';
export const READ = 'read';
export const NONE = 'none';

export const types = [
    CURRENTLY_READING, WANT_TO_READ, READ
]

export const shelfTitles = {
    [CURRENTLY_READING]: 'Currently Reading',
    [WANT_TO_READ]: 'Want to Read',
    [READ] : 'Read',
    [NONE] : 'Idle Books',
}
