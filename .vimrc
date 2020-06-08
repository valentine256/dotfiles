" Vim 8 defaults
unlet! skip_defaults_vim
silent! source $VIMRUNTIME/defaults.vim

let s:darwin = has('mac')

set nocompatible

" crypto method
silent! set cryptmethod=blowfish2

set encoding=UTF-8
set fileencoding=UTF-8
set fileencodings=utf8,euc-kr,cp949,cp932,euc-jp,shift-jis,big5,latin1,ucs-2le
set visualbell
set backspace=indent,eol,start
set tabstop=2
set shiftwidth=2
set cindent
set autoindent
set smartindent
set ruler
set showcmd
set hlsearch
set background=dark
set number
set swapfile
set wildmenu
set ignorecase

let mapleader=","
syntax on

""" PLUG START
call plug#begin('~/.vim/plugged')

" sessions
Plug 'jeetsukumaran/vim-buffergator'
Plug 'tpope/vim-obsession'
Plug 'dhruvasagar/vim-prosession'
Plug 'gikmx/ctrlp-obsession'
Plug 'mbbill/undotree'

Plug 'tpope/vim-fugitive'
Plug 'tpope/vim-haml'
Plug 'tpope/vim-endwise'
Plug 'tpope/vim-commentary'
Plug 'chrisbra/csv.vim'
Plug 'rstacruz/sparkup', {'rtp': 'vim/'}

" langs
Plug 'udalov/kotlin-vim'
Plug 'plytophogy/vim-virtualenv'
Plug 'leafgarland/typescript-vim'
Plug 'peitalin/vim-jsx-typescript'
Plug 'fatih/vim-go'
Plug 'neovimhaskell/haskell-vim'
Plug 'Shougo/neco-vim'

" theme
Plug 'vim-airline/vim-airline'
Plug 'vim-airline/vim-airline-themes'
Plug 'chriskempson/base16-vim'

" syntax / autocomplete
Plug 'dense-analysis/ale'

Plug 'neoclide/coc.nvim',            { 'do': 'yarn install --frozen-lockfile'}
Plug 'neoclide/coc-highlight',       { 'do': 'yarn install --frozen-lockfile'}
Plug 'neoclide/coc-prettier',        { 'do': 'yarn install --frozen-lockfile'}
Plug 'neoclide/coc-html',            { 'do': 'yarn install --frozen-lockfile'}
Plug 'neoclide/coc-css',             { 'do': 'yarn install --frozen-lockfile'}
Plug 'neoclide/coc-tsserver',        { 'do': 'yarn install --frozen-lockfile'}
Plug 'neoclide/coc-eslint',          { 'do': 'yarn install --frozen-lockfile'}
Plug 'neoclide/coc-python',          { 'do': 'yarn install --frozen-lockfile'}
Plug 'neoclide/coc-solargraph',      { 'do': 'yarn install --frozen-lockfile'}
Plug 'neoclide/coc-json',            { 'do': 'yarn install --frozen-lockfile'}
Plug 'neoclide/coc-yaml',            { 'do': 'yarn install --frozen-lockfile'}
Plug 'neoclide/coc-git',             { 'do': 'yarn install --frozen-lockfile'}
Plug 'neoclide/coc-neco',            { 'do': 'yarn install --frozen-lockfile'}
Plug 'neoclide/coc-snippets',        { 'do': 'yarn install --frozen-lockfile'}
" Plug 'iamcco/coc-actions',           { 'do': 'yarn install --frozen-lockfile'}
Plug 'fannheyward/coc-markdownlint', { 'do': 'yarn install --frozen-lockfile'}
Plug 'weirongxu/coc-explorer',       { 'do': 'yarn install --frozen-lockfile'}
Plug 'josa42/coc-go',                { 'do': 'yarn install --frozen-lockfile'}
Plug 'josa42/coc-docker',            { 'do': 'yarn install --frozen-lockfile'}
Plug 'antoinemadec/coc-fzf',         { 'do': 'yarn install --frozen-lockfile'}

" tags explorer
Plug 'liuchengxu/vista.vim'

" utils
Plug 'tpope/vim-eunuch'
Plug 'tpope/vim-vinegar'
Plug 'tpope/vim-surround'
Plug 'scrooloose/nerdtree'
Plug 'majutsushi/tagbar'
Plug 'ctrlpvim/ctrlp.vim'
Plug 'junegunn/goyo.vim'
Plug 'junegunn/limelight.vim'
Plug 'junegunn/fzf',                 { 'do': './install --all' }
Plug 'junegunn/fzf.vim'
Plug 'junegunn/vim-easy-align'
Plug 'luochen1990/rainbow'
" Plug 'jiangmiao/auto-pairs'
Plug 'skanehira/docker-compose.vim'
Plug 'vimwiki/vimwiki'
Plug 'vim-pandoc/vim-pandoc'
Plug 'vim-pandoc/vim-pandoc-syntax'
Plug 'iamcco/markdown-preview.nvim', { 'do': 'cd app & yarn install' }

" kubernetes
Plug 'c9s/helper.vim'
Plug 'c9s/treemenu.vim'
Plug 'c9s/vikube.vim'

call plug#end()
""" PLUG END

""" Plugin Configuration START

" NerdTree
map <C-n> <ESC>:NERDTree<CR>
autocmd bufenter * if (winnr("$") == 1 && exists("b:NERDTree") && b:NERDTree.isTabTree()) | q | endif

" vim-fugitive
nnoremap <leader>gb :Gblame<CR>
nnoremap <leader>gs :Gstatus<CR>
nnoremap <leader>gf :Gvdiffsplit!<CR>
nnoremap <leader>gd :Gvdiffsplit<CR>
nnoremap <leader>gl :Glog<CR>
nnoremap <leader>gc :Gcommit<CR>
nnoremap <leader>gp :Git push<CR>

" ctrlp-obsession
nnoremap <leader>ss :CtrlPObsession<CR>

" undotree
if !isdirectory($HOME."/.vim/.undodir")
	call mkdir($HOME."/.vim/.undodir", "", 0700)
endif
set undodir=~/.vim/.undodir
set undofile
nnoremap <leader>ut :UndotreeToggle<CR>:UndotreeFocus<CR>

" tagbar
nnoremap <F8> :TagbarToggle<CR>


" vim-airline
set laststatus=2
let g:airline_theme = 'badwolf'
let g:airline_powerline_fonts = 1
let g:airline#extensions#tabline#enabled = 1

" ale
" let g:ale_linters = {
" 			\  'python': ['pylint']
" 			\}
" let g:ale_fixers = {
" 			\  'python': ['yapf'],
" 			\  'ruby': ['rubocop']
" 			\}
""" Only run linters named in ale_linters settings.
let g:ale_linters_explicit = 1

" goyo / limelight
map <C-f> <ESC>:Goyo<CR>

" fzf
if has('nvim') || has('gui_running')
	let $FZF_DEFAULT_OPTS .= ' --inline-info'
endif

" fzf: All files
command! -nargs=? -complete=dir AFI
			\ call fzf#run(fzf#wrap(fzf#vim#with_preview({
			\   'source': 'fd --type f --hidden --follow --exclude .git --no-ignore . '.expand(<q-args>)
			\ })))

" fzf: All files & ignore
command! -nargs=? -complete=dir AF
			\ call fzf#run(fzf#wrap(fzf#vim#with_preview({
			\   'source': 'fd --type f --hidden --follow --exclude .git '.expand(<q-args>)
			\ })))

nnoremap <leader>, :AF<CR>
nnoremap <leader>af :AFI<CR>

let g:fzf_colors =
			\ { 'fg':      ['fg', 'Normal'],
			\ 'bg':      ['bg', 'Normal'],
			\ 'hl':      ['fg', 'Comment'],
			\ 'fg+':     ['fg', 'CursorLine', 'CursorColumn', 'Normal'],
			\ 'bg+':     ['bg', 'CursorLine', 'CursorColumn'],
			\ 'hl+':     ['fg', 'Statement'],
			\ 'info':    ['fg', 'PreProc'],
			\ 'border':  ['fg', 'Ignore'],
			\ 'prompt':  ['fg', 'Conditional'],
			\ 'pointer': ['fg', 'Exception'],
			\ 'marker':  ['fg', 'Keyword'],
			\ 'spinner': ['fg', 'Label'],
			\ 'header':  ['fg', 'Comment'] }

" Terminal buffer options for fzf
autocmd! FileType fzf
autocmd  FileType fzf set noshowmode noruler nonu

" coc
if has_key(g:plugs, 'coc.nvim')
	function! s:check_back_space() abort
		let col = col('.') - 1
		return !col || getline('.')[col - 1]  =~# '\s'
	endfunction

	inoremap <silent><expr> <TAB>
				\ pumvisible() ? "\<C-n>" :
				\ <SID>check_back_space() ? "\<TAB>" :
				\ coc#refresh()

	inoremap <expr><S-TAB> pumvisible() ? "\<C-p>" : "\<C-h>"

	inoremap <silent><expr> <C-space>
				\ pumvisible() ? "\<C-n>" :
				\ coc#refresh()

	inoremap <silent><expr> <C-S-space>
				\ pumvisible() ? "\<C-p>" :
				\ "\<ESC>:call CocAction('showSignatureHelp')\<CR>a"

	function! s:show_documentation()
		if (index(['vim', 'help'], &filetype) >= 0)
			execute 'h' expand('<cword>')
		else
			call CocAction('doHover')
		endif
	endfunction

	nnoremap <silent> gh :call <SID>show_documentation()<CR>

	let g:go_doc_keywordprg_enabled = 0

	augroup coc-config
		autocmd!
		autocmd VimEnter * nmap <silent> [g <Plug>(coc-diagnostic-prev)
		autocmd VimEnter * nmap <silent> ]g <Plug>(coc-diagnostic-next)

		autocmd VimEnter * nmap <silent> gd <Plug>(coc-definition)
		autocmd VimEnter * nmap <silent> gr <Plug>(coc-references)
		autocmd VimEnter * nmap <silent> gp :call CocAction('showSignatureHelp')<CR>
		autocmd VimEnter * imap <silent> <C-p> <ESC>:call CocAction('showSignatureHelp')<CR>a
	augroup END


endif

command! -nargs=0 Prettier :CocCommand prettier.formatFile
autocmd CursorHold * silent call CocActionAsync('highlight')

nmap <leader>rn <Plug>(coc-rename)

xmap <silent> <leader>f <Plug>(coc-format-selected)
vmap <silent> <leader>f <Plug>(coc-format-selected)
nmap <silent> <leader>f <Plug>(coc-format-selected)

xmap <leader>fa <Plug>(coc-format)
nmap <leader>fa <Plug>(coc-format)

" replaced by coc-actions
xmap <silent> <leader>a <Plug>(coc-codeaction-selected)
nmap <silent> <leader>a <Plug>(coc-codeaction-selected)
nmap <silent> <leader>ac <Plug>(coc-codeaction)

" Remap for do codeAction of selected region
" function! s:cocActionsOpenFromSelected(type) abort
"   execute 'CocCommand actions.open ' . a:type
" endfunction
" xmap <silent> <leader>a :<C-u>execute 'CocCommand actions.open ' . visualmode()<CR>
" nmap <silent> <leader>a :<C-u>set operatorfunc=<SID>cocActionsOpenFromSelected<CR>g@
" nmap <silent> <leader>ac :<C-u>CocCommand actions.open<CR>


nmap <silent> <leader>qf <Plug>(coc-fix-current)

nnoremap <silent> <leader><space>a  :<C-u>CocFzfList diagnostics<CR>
nnoremap <silent> <leader><space>b  :<C-u>CocFzfList diagnostics --current-buf<CR>
nnoremap <silent> <leader><space>c  :<C-u>CocFzfList commands<CR>
nnoremap <silent> <leader><space>e  :<C-u>CocFzfList extensions<CR>
nnoremap <silent> <leader><space>l  :<C-u>CocFzfList location<CR>
nnoremap <silent> <leader><space>o  :<C-u>CocFzfList outline<CR>
nnoremap <silent> <leader><space>s  :<C-u>CocFzfList symbols<CR>
nnoremap <silent> <leader><space>S  :<C-u>CocFzfList services<CR>
nnoremap <silent> <leader><space>p  :<C-u>CocFzfListResume<CR>
nnoremap <silent> <leader><space><space>  :<C-u>CocFzfList<CR>

let g:fzf_layout = { 'window': { 'width': 0.9, 'height': 0.6 } }

" coc-explorer
nnoremap <silent> <leader>n :CocCommand explorer --preset panel<CR>
nnoremap <silent> <leader>ee :CocCommand explorer --preset floating<CR>

" vim-easy-align
xmap ga <Plug>(EasyAlign)
nmap ga <Plug>(EasyAlign)

" vim-go
let g:go_def_mapping_enabled = 0

" rainbow
let g:rainbow_active = 1

" vimwiki
let g:vimwiki_list = [{'path': '~/vimwiki/',
			\ 'automatic_nested_syntaxes': 1,
			\ 'auto_toc': 1,
			\ 'auto_tags': 1,
			\ 'auto_diary_index': 1,
			\ 'syntax': 'markdown',
			\ 'ext': '.md'}]
let g:vimwiki_folding = 'expr'
let g:vimwiki_auto_chdir = 1
autocmd Filetype vimwiki set syntax=markdown.pandoc
let g:tagbar_type_vimwiki = {
			\ 'ctagstype': 'vimwiki'
			\ , 'kinds': ['h:header']
			\ , 'sro':'&&&'
			\ , 'kind2scope':{'h':'header'}
			\ , 'sort':0
			\ , 'ctagsbin':'~/vimwiki/vwtags.py'
			\ , 'ctagsargs': 'markdown'
			\ }


" pandoc
let g:pandoc#filetypes#handled = ["pandoc", "markdown"]
let g:pandoc#folding#mode = ["syntax"]
let g:pandoc#spell#enabled = 0
let g:pandoc#syntax#codeblocks#embeds#langs = ["c", "cpp", "cmake", "css", "dockerfile", "go", "html", 
			\ "haskell", "json", "java", "javascript", "javascriptreact", "markdown", "ocaml", "perl",
			\ "python", "ruby", "rust", "sql", "scala", "texinfo", "typescript", "xml", "yaml", "zsh",
			\ "bash=sh", "literatehaskell=lhaskell"]
let g:pandoc#formatting#smart_autoformat_on_cursormoved = 1

" markdown-preview.nvim
let g:mkdp_auto_start   = 0
let g:mkdp_auto_close   = 0
let g:mkdp_refresh_slow = 0
nmap <leader>mp <Plug>MarkdownPreviewToggle

" vim-haskell
let g:haskell_enable_quantification = 1   " to enable highlighting of `forall`
let g:haskell_enable_recursivedo = 1      " to enable highlighting of `mdo` and `rec`
let g:haskell_enable_arrowsyntax = 1      " to enable highlighting of `proc`
let g:haskell_enable_pattern_synonyms = 1 " to enable highlighting of `pattern`
let g:haskell_enable_typeroles = 1        " to enable highlighting of type roles
let g:haskell_enable_static_pointers = 1  " to enable highlighting of `static`
let g:haskell_backpack = 1                " to enable highlighting of backpack keywords

" vista
nnoremap <leader>vv :Vista!!<CR>
nnoremap <leader>vf :Vista finder<CR>

let g:vista_default_executive = 'ctags'
let g:vista_executive_for = {
			\ 'markdown': 'coc',
			\ 'html': 'coc',
			\ 'ruby': 'coc',
			\ 'python': 'coc',
			\ 'haskell': 'coc',
			\ 'go': 'coc',
			\ 'javascript': 'coc',
			\ 'typescript': 'coc',
			\ 'typescript.tsx': 'coc',
			\ 'json': 'coc',
			\ 'yaml': 'coc',
			\ }
let g:vista_fzf_preview = ['right:50%']

" coc-snippets
" Use <C-l> for trigger snippet expand.
imap <C-l> <Plug>(coc-snippets-expand)

" Use <C-j> for select text for visual placeholder of snippet.
vmap <C-j> <Plug>(coc-snippets-select)

" Use <C-j> for jump to next placeholder, it's default of coc.nvim
let g:coc_snippet_next = '<c-j>'

" Use <C-k> for jump to previous placeholder, it's default of coc.nvim
let g:coc_snippet_prev = '<c-k>'

" Use <C-j> for both expand and jump (make expand higher priority.)
imap <C-j> <Plug>(coc-snippets-expand-jump)

"" Plugin Configuration END

autocmd Filetype markdown       setlocal ts=4 sw=4 sts=4 expandtab foldmethod=syntax foldlevel=99
autocmd Filetype html           setlocal ts=2 sw=2 expandtab foldmethod=syntax foldlevel=99
autocmd Filetype ruby           setlocal ts=2 sw=2 expandtab foldmethod=syntax foldlevel=99
autocmd Filetype python         setlocal ts=4 sw=4 expandtab foldmethod=syntax foldlevel=99
autocmd Filetype haskell        setlocal ts=2 sw=2 expandtab foldmethod=syntax foldlevel=99
autocmd Filetype go             setlocal ts=2 sw=2 foldmethod=syntax foldlevel=99
autocmd Filetype javascript     setlocal ts=2 sw=2 sts=0 expandtab foldmethod=syntax foldlevel=99
autocmd Filetype typescript     setlocal ts=2 sw=2 sts=0 expandtab foldmethod=syntax foldlevel=99
autocmd Filetype typescript.tsx setlocal ts=2 sw=2 sts=0 expandtab foldmethod=syntax foldlevel=99
autocmd Filetype json           setlocal ts=2 sw=2 sts=0 expandtab foldmethod=syntax foldlevel=99
autocmd Filetype yaml           setlocal ts=2 sw=2 sts=0 expandtab foldmethod=indent foldlevel=99

autocmd BufNewFile,BufRead *.tsx,*.jsx set filetype=typescript.tsx

map <F1> <ESC>:help<CR>

nnoremap H <C-w>h
nnoremap J <C-w>j
nnoremap K <C-w>k
nnoremap L <C-w>l
nnoremap QQ :qall<CR>

""" Fold
" fold shortcut
nnoremap <space> za
vnoremap <space> za
" fold text
function! MyFoldText() " {{{
	let line = getline(v:foldstart)
	let nucolwidth = &fdc + &number * &numberwidth
	let windowwidth = winwidth(0) - nucolwidth - 3
	let foldedlinecount = v:foldend - v:foldstart
	" expand tabs into spaces
	let onetab = strpart(' ', 0, &tabstop)
	let line = substitute(line, '\t', onetab, 'g')
	let line = strpart(line, 0, windowwidth - 2 -len(foldedlinecount))
	let fillcharcount = windowwidth - len(line) - len(foldedlinecount)
	return line . '…' . repeat(" ",fillcharcount) . foldedlinecount . '…' . ' '
endfunction " }}}

set foldtext=MyFoldText()


""" colorscheme (base16)
" if filereadable(expand("~/.vimrc_background"))
" 	let base16colorspace=256
" 	source ~/.vimrc_background
" endif
"

let base16colorspace=256
if has('nvim')
	source ~/.config/nvim/colorscheme.vim
else
	source ~/.vim/colorscheme.vim
endif



" Simple Shortcut
nmap <C-l> :tabnext<CR>
nmap <C-h> :tabprevious<CR>

nmap <leader>wq :wq<CR>
nmap <leader>qq :qa<CR>
nmap <leader>tn :tabnew<CR>

