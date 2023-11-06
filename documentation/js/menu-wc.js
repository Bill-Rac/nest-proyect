'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nest-proyect documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-a9f3770896bcf57aa4fb38b70fced6bf804788491265cb2bf492877c69f4bd79dcb1362988df79087a2c2a71c39a6e685369611e3166f6d0fea720b1fbab89a5"' : 'data-bs-target="#xs-controllers-links-module-AppModule-a9f3770896bcf57aa4fb38b70fced6bf804788491265cb2bf492877c69f4bd79dcb1362988df79087a2c2a71c39a6e685369611e3166f6d0fea720b1fbab89a5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-a9f3770896bcf57aa4fb38b70fced6bf804788491265cb2bf492877c69f4bd79dcb1362988df79087a2c2a71c39a6e685369611e3166f6d0fea720b1fbab89a5"' :
                                            'id="xs-controllers-links-module-AppModule-a9f3770896bcf57aa4fb38b70fced6bf804788491265cb2bf492877c69f4bd79dcb1362988df79087a2c2a71c39a6e685369611e3166f6d0fea720b1fbab89a5"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-a9f3770896bcf57aa4fb38b70fced6bf804788491265cb2bf492877c69f4bd79dcb1362988df79087a2c2a71c39a6e685369611e3166f6d0fea720b1fbab89a5"' : 'data-bs-target="#xs-injectables-links-module-AppModule-a9f3770896bcf57aa4fb38b70fced6bf804788491265cb2bf492877c69f4bd79dcb1362988df79087a2c2a71c39a6e685369611e3166f6d0fea720b1fbab89a5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-a9f3770896bcf57aa4fb38b70fced6bf804788491265cb2bf492877c69f4bd79dcb1362988df79087a2c2a71c39a6e685369611e3166f6d0fea720b1fbab89a5"' :
                                        'id="xs-injectables-links-module-AppModule-a9f3770896bcf57aa4fb38b70fced6bf804788491265cb2bf492877c69f4bd79dcb1362988df79087a2c2a71c39a6e685369611e3166f6d0fea720b1fbab89a5"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link" >DatabaseModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PhotoModule.html" data-type="entity-link" >PhotoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PhotoModule-13a3f2528b68b7e71fa1302037f5b931a76ac8e4209fd3ab1854da26f443e67bf0646585cd3b885cde38bdc55e6bfddc85daf83ac179a40257180a5c2fcaf38e"' : 'data-bs-target="#xs-controllers-links-module-PhotoModule-13a3f2528b68b7e71fa1302037f5b931a76ac8e4209fd3ab1854da26f443e67bf0646585cd3b885cde38bdc55e6bfddc85daf83ac179a40257180a5c2fcaf38e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PhotoModule-13a3f2528b68b7e71fa1302037f5b931a76ac8e4209fd3ab1854da26f443e67bf0646585cd3b885cde38bdc55e6bfddc85daf83ac179a40257180a5c2fcaf38e"' :
                                            'id="xs-controllers-links-module-PhotoModule-13a3f2528b68b7e71fa1302037f5b931a76ac8e4209fd3ab1854da26f443e67bf0646585cd3b885cde38bdc55e6bfddc85daf83ac179a40257180a5c2fcaf38e"' }>
                                            <li class="link">
                                                <a href="controllers/PhotoController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PhotoController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PhotoModule-13a3f2528b68b7e71fa1302037f5b931a76ac8e4209fd3ab1854da26f443e67bf0646585cd3b885cde38bdc55e6bfddc85daf83ac179a40257180a5c2fcaf38e"' : 'data-bs-target="#xs-injectables-links-module-PhotoModule-13a3f2528b68b7e71fa1302037f5b931a76ac8e4209fd3ab1854da26f443e67bf0646585cd3b885cde38bdc55e6bfddc85daf83ac179a40257180a5c2fcaf38e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PhotoModule-13a3f2528b68b7e71fa1302037f5b931a76ac8e4209fd3ab1854da26f443e67bf0646585cd3b885cde38bdc55e6bfddc85daf83ac179a40257180a5c2fcaf38e"' :
                                        'id="xs-injectables-links-module-PhotoModule-13a3f2528b68b7e71fa1302037f5b931a76ac8e4209fd3ab1854da26f443e67bf0646585cd3b885cde38bdc55e6bfddc85daf83ac179a40257180a5c2fcaf38e"' }>
                                        <li class="link">
                                            <a href="injectables/PhotoService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PhotoService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Photo.html" data-type="entity-link" >Photo</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePhotoDto.html" data-type="entity-link" >CreatePhotoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePhotoDto.html" data-type="entity-link" >UpdatePhotoDto</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});