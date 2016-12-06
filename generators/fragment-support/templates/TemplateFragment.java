package <%= appPackage %>;

import com.joxad.easydatabinding.fragment.v4.FragmentBase;
import <%= appPackage %>.R;
import <%= appPackage %>.BR;
import <%= appPackage %>.<%= packageName %>.<%= name %>VM;
import <%= appPackage %>.databinding.<%= name %>Binding;

/**
 * Generated by generator-android-template
 */
public class <%= name %> extends FragmentBase<<%= name %>Binding, <%= name %>VM> {
    @Override
    public int data() {
        return BR.<%= BR %>;
    }

    @Override
    public int layoutResources() {
        return R.layout.<%= layoutName %>;
    }

    @Override
    public <%= name %>VM baseFragmentVM(<%= name %>Binding binding, Bundle savedInstanceState) {
        return new <%= name %>VM(this, binding);
    }
}